import { useEffect, useRef, useState } from "react";

interface RotatingTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  loop?: boolean;
}

export function useRotatingTypewriter({
  words,
  typingSpeed = 50,
  deletingSpeed = 25,
  pause = 5000,
  loop = true,
}: RotatingTypewriterOptions) {

  const [text, setText] = useState<string>("")
  const wordIndex = useRef<number>(0)
  const startTime = useRef<number | null>(null);
  const phase = useRef<"typing" | "deleting" | "pausing">("typing")
  const raf = useRef<number | null>(null)

  useEffect(() => {


    const animate = (time: number) => {
      if (!startTime.current) startTime.current = time;

      const elapsed = time - startTime.current

      const word = words[wordIndex.current]

      if (phase.current === "typing") {
        const chars = Math.min(
          Math.floor(elapsed / typingSpeed), word.length
        )
        setText(word.slice(0, chars))

        if (chars === word.length) {
          phase.current = "pausing"
          startTime.current = time
          raf.current = requestAnimationFrame(animate);
          return;
        }
      }

      if (phase.current === "pausing") {

        if (elapsed > pause) {
          phase.current = "deleting"
          startTime.current = time
          raf.current = requestAnimationFrame(animate);
          return;
        }
      }

      if (phase.current === "deleting") {
        const elapsedDeleting = time - startTime.current!;
        const charsToDelete = Math.max(
          word.length - Math.floor(elapsedDeleting / deletingSpeed),
          0
        );
        setText(word.slice(0, charsToDelete));


        if (charsToDelete == 0) {

          if (!loop && wordIndex.current === words.length - 1) return;

          phase.current = "typing"
          startTime.current = time;
          wordIndex.current = (wordIndex.current + 1) % words.length

        }


      }



      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current!);
  }, [words, typingSpeed, deletingSpeed, pause, loop]);
  return text;
}