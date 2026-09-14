import styleExperience from "../styles/main/experience.global.module.css";
import styleRightExperience from "../styles/right/experience.right.module.css";
import {
  LeftContainer,
  arrayOfExperienceSection,
  type ExperienceStage,
} from "../features/leftScrollEffect/tsx/LeftContainer";
import {
  FigureCards,
  definedCards,
} from "../features/FigureCards/tsx/FigureCards";
import { useState } from "react";


export const Experience = () => {
const [activeStage, setActiveStage] = useState<ExperienceStage>("frontend")

  return (
    <main className={styleExperience.experience}>
      {/* Left */}
      <LeftContainer items={arrayOfExperienceSection} activeStage={activeStage} onStageChange={setActiveStage} />
      {/* Right */}
      <section className={styleRightExperience.right}>
        <div id={styleRightExperience.rightContainer}>
          <FigureCards items={definedCards} activeStage={activeStage} />
        </div>
      </section>
    </main>
  );
};
