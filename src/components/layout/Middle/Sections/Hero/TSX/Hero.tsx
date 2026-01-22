import HeroSectionsPicture from "../Assets//HeroSectionsPicture/HeroSectionsPicture.png"
import { CustomTypeWriterEffect } from "../Features/CustomTypeWriterEffect/CustomTypeWriterEffect";
import HEROM from "../Styles/Hero/Hero.module.css"
import HEROLM from "../Styles/Left/Hero.left.module.css"
import HERORM from "../Styles/Right/Hero.right.module.css"

export const Hero = () => {
      const text = CustomTypeWriterEffect({
    words: [
      " I design modern web experiences.",
      " Intuitive user experiences.",
      " Products that scale naturally.",
      " Quiet, reliable products.",
    ],
  });

  return (
    <main className={HEROM["at-main"]}>
      <section className={HEROLM["left-main-section"]}>
        <div className={HEROLM["container"]}>
            <h1>Hi, I am<span id={HEROLM['arslantauseef']}> Arslan Tauseef</span></h1>
            <h2 className={HEROLM["span-h1"]}>{text}</h2>
        </div>
      </section>
      <section className={HERORM["right-main-section"]}>
        <div>
          <img src={HeroSectionsPicture} alt="Profile Picture (Arslan Tauseef)" />
        </div>
      </section>
    </main>
  )
}
