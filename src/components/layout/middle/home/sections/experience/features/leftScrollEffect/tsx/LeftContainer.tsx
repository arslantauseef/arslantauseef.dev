import { useEffect, useRef, useState } from "react";
import { Orb } from "../../../../../../../../global_feature/orb/tsx/Orb";
import styleLeftExperience from "../../../styles/left/experience.left.module.css";
import styleLeftScrollEffect from "../styles/leftScrollEffect.module.css";

export type ExperienceStage = "frontend" | "backend" | "database";

type ExperienceSection = {
  stage: ExperienceStage;
  label: string;
  number: string;
  title_1: string;
  title_2: string;
  description: string;
  technologies: readonly string[];
};

export const arrayOfExperienceSection = [
  {
    stage: "frontend",
    label: "FRONTEND ENGINEERING",
    number: "01 / 03",
    title_1: "Interfaces that feel",
    title_2: "effortless.",
    description:
      "I build responsive and accessible interfaces with React and TypeScript, then deploy them through Vercel.",
    technologies: ["React", "TypeScript", "Vercel"],
  },
  {
    stage: "backend",
    label: "BACKEND ARCHITECTURE",
    number: "02 / 03",
    title_1: "Logic built to stay",
    title_2: "reliable.",
    description:
      "I build reliable server-side applications with Node.js and Express.js, deployed through Render and Railway.",
    technologies: ["Node.js", "Express.js", "Render", "Railway"],
  },
  {
    stage: "database",
    label: "DATA & PERFORMANCE",
    number: "03 / 03",
    title_1: "Data shaped for",
    title_2: "scale",
    description:
      "I design structured PostgreSQL databases using modern platforms such as Neon and Supabase.",
    technologies: ["PostgreSQL", "Neon", "Supabase"],
  },
] as const satisfies readonly ExperienceSection[];

export type Props = {
  items: readonly ExperienceSection[];
};

export const LeftContainer = (props: Props) => {
  const articleRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeStage, setActiveStage] = useState<ExperienceStage>("frontend");

  useEffect(() => {
    const detectActiveStage = () => {
      const activationLine = window.innerHeight / 2;

      const activeIndex = articleRefs.current.findIndex((element) => {
        if (!element) return false;

        const articleRect = element.getBoundingClientRect();

        return (
          articleRect.top <= activationLine &&
          articleRect.bottom > activationLine
        );
      });

      const nextStage = props.items[activeIndex]?.stage;

      setActiveStage(nextStage);

      if (activeIndex === -1) return;
    };

    detectActiveStage();

    window.addEventListener("scroll", detectActiveStage, {
      passive: true,
    });

    window.addEventListener("resize", detectActiveStage);

    return () => {
      window.removeEventListener("scroll", detectActiveStage);
      window.removeEventListener("resize", detectActiveStage);
    };
  }, [props.items]);

  return (
    <section className={styleLeftExperience.left}>
      {props.items.map((item, index) => {
        const IsStageActive = activeStage === item.stage;
        return (
          <article
            className={`${[styleLeftExperience.leftContainer]} ${[styleLeftScrollEffect.leftContainer]} ${IsStageActive ? styleLeftScrollEffect.active : ""}`}
            key={item.stage}
            data-stage={item.stage}
            ref={(element) => {
              articleRefs.current[index] = element;
            }}
          >
            <div>
              <Orb />
              <span>{item.label}</span>
            </div>
            <span>{item.number}</span>
            <h2>
              {item.title_1} <br /> <span>{item.title_2}</span>{" "}
            </h2>
            <p>{item.description}</p>
            <ul>
              {item.technologies.map((technology) => {
                return <li key={technology}>{technology}</li>;
              })}
            </ul>
          </article>
        );
      })}
    </section>
  );
};
