import styleExperience from "../styles/main/experience.global.module.css";
import styleLeftExperience from "../styles/left/experience.left.module.css"
import styleRightExperience from "../styles/right/experience.right.module.css"
export const Experience = () => {
  return (
    <main className={styleExperience.experience}>
      {/* Left */}
      <section className={styleLeftExperience.left}>
        <div id={styleLeftExperience.leftContainer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          facere distinctio officia!
        </div>
        <div id={styleLeftExperience.leftContainer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          facere distinctio officia!
        </div>
        <div id={styleLeftExperience.leftContainer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          facere distinctio officia!
        </div>
      </section>
      {/* Right */}
      <section className={styleRightExperience.right}>
        <div id={styleRightExperience.rightContainer}>
          <figure className={styleRightExperience.rightFigure}>

          </figure>
        </div>
      </section>
    </main>
  );
};
