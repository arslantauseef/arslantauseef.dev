import "../../../styles/layout/middle/mid-middle/mid-middle.css"
import HeroSectionsPicture from "../Header/Assets/Pictures/HeroSectionsPicture/HeroSectionsPicture.png"
import { useRotatingTypewriter } from "../../subcomponents/effects/typewritter/useRotatingTypewriter";

export const Middle = () => {
  const text = useRotatingTypewriter({
    words: [
      " I design modern web experiences.",
      " Intuitive user experiences.",
      " Products that scale naturally.",
      " Quiet, reliable products.",
    ],
  });

  return (
    <main className="at-main">
      <section className="left-main-section">
        <div className="container">
            <h1>Hi, I am<span id="arslantauseef"> Arslan Tauseef</span></h1>
            <h2 className="span-h1">{text}</h2>
        </div>
      </section>
      <section className="right-main-section">
        <div>
          <img src={HeroSectionsPicture} alt="Profile Picture (Arslan Tauseef)" />
        </div>
      </section>
    </main>
  );
};
