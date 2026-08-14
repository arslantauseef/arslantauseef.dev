import styleExperience from "../styles/main/experience.global.module.css";
import styleRightExperience from "../styles/right/experience.right.module.css";
import {
  LeftContainer,
  arrayOfExperienceSection,
} from "../features/leftScrollEffect/tsx/LeftContainer";
import {
  FigureCards,
  definedCards,
} from "../features/FigureCards/tsx/FigureCards";
export const Experience = () => {
  return (
    <main className={styleExperience.experience}>
      {/* Left */}
      <LeftContainer items={arrayOfExperienceSection} />
      {/* Right */}
      <section className={styleRightExperience.right}>
        <div id={styleRightExperience.rightContainer}>
          <FigureCards items={definedCards} />
        </div>
      </section>
    </main>
  );
};
