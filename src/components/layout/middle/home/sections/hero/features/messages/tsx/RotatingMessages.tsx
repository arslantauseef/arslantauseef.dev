import React, { useEffect, useState } from "react";
import styleRightMessageElement from "../styles/rotatingMessages.module.css";
import styleRightMessagePulseEffect from "../styles/rotatingMessages.pulseEffect.module.css";
type Message = {
  tag: string;
  array: string[];
};
export const messages: Message[] = [
  {
    tag: "Available to work",
    array: [
      "Let's build something great",
      "Open for new projects",
      "Ready when you are",
    ],
  },
  {
    tag: "Currently building",
    array: [
      "Turning ideas into products",
      "Shipping clean interfaces",
      "Building scalable systems",
    ],
  },
  {
    tag: "Developer mode",
    array: [
      "Code. Test. Improve.",
      "Performance matters",
      "Clean code in progress",
    ],
  },
  {
    tag: "Let's collaborate",
    array: ["Have an idea?", "Let's make it real", "Let's build together"],
  },
];

type Props = {
  items: Message[];
};

export const RotatingMessages = (props: Props) => {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [arrayIndex, setArrayIndex] = useState<number>(0);
  const [isTagChanging, setIsTagChanging] = useState<boolean>(false);

  useEffect(() => {
    let tagTimeout: ReturnType<typeof setTimeout>;

    const sentenceTimeout = setTimeout(() => {
      const currentArray = props.items[messageIndex].array;

      if (arrayIndex < currentArray.length - 1) {
        setArrayIndex((previousIndex) => previousIndex + 1);
      } else {
        setIsTagChanging(true);

        tagTimeout = setTimeout(() => {
          setArrayIndex(0);

          setMessageIndex((previousIndex) => {
            return (previousIndex + 1) % props.items.length;
          });

          setIsTagChanging(false);
        }, 500);
      }
    }, 3000);

    return () => {
      clearTimeout(sentenceTimeout);
      clearTimeout(tagTimeout);
    };
  }, [arrayIndex, messageIndex, props.items]);

  return (
    <div className={styleRightMessageElement.messageWindow}>
      <div className={styleRightMessageElement.wrapper}>
        <div className={styleRightMessagePulseEffect.pulseEffect}></div>
        <span
          key={messageIndex}
          className={`${styleRightMessageElement.rotatingTag} ${
            isTagChanging ? styleRightMessageElement.tagLeaving : ""
          }`}
        >
          {props.items[messageIndex].tag}
        </span>
        <span
          key={`${messageIndex}-${arrayIndex}`}
          className={styleRightMessageElement.rotatingSentence}
        >
          {props.items[messageIndex].array[arrayIndex]}
        </span>
      </div>
    </div>
  );
};
