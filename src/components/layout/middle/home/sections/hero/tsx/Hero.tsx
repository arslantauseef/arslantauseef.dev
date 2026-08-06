import styleHome from "../styles/main/hero.module.css";
import styleLeft from "../styles/left/hero.left.module.css";
import styleRight from "../styles/right/global/hero.right.module.css";
import styleRightScreen from "../styles/right/screen/hero.right.screen.module.css";
import styleLeftPulseEffect from "../styles/left/hero.left.pulseEffect.module.css";
import styleRightSymbol from "../styles/right/symbol/hero.right.symbol.module.css";
import { NavLink } from "react-router-dom";
import { MdArrowOutward, MdArrowRightAlt } from "react-icons/md";
import DP from "../../../../../../assets/images/picture.png"

// import image from "../../../../../../assets/images/WhatsApp Image 2026-01-03 at 01.15.34 2.png";

import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import {
  RotatingMessages,
  messages,
} from "../features/messages/tsx/RotatingMessages";

export const Hero = () => {
  return (
    <main className={styleHome.hero}>
      <section className={styleLeft.left}>
        <div className={styleLeft.leftContainer}>
          <div className={styleLeft.firstDiv}>
            <div className={styleLeftPulseEffect.pulseEffect}></div>
            <h1 className={styleLeftPulseEffect.textPulseEffect}>
              FULL STACK DEVELOPER
            </h1>
          </div>
          {/* SPACER */}
          <div className={styleLeft.secondDiv}>
            <h1>Building scalable</h1>
            <h1>web apps that</h1>
            <h1>drives results.</h1>
          </div>
          {/* SPACER */}
          <div className={styleLeft.thirdDiv}>
            <p>
              I design and build modern, performant web applications with clean
              code, intuitive experiences, and scalable architectures.
            </p>
          </div>
          {/* SPACER */}
          <div className={styleLeft.fourthDiv}>
            <NavLink to={"/projects"}>
              View Projects <MdArrowOutward />
            </NavLink>
            <NavLink to={"/about"}>
              About Me <MdArrowRightAlt />
            </NavLink>
          </div>
          {/* SPACER */}
          <div className={styleLeft.fifthDiv}>
            <h4>TECH STACK</h4>
            <ul>
              <li>
                <FaReact />
              </li>
              <li>
                <SiNodedotjs />
              </li>
              <li>
                <SiTypescript />
              </li>
              <li>
                <SiExpress />
              </li>
              <li>
                <BiLogoPostgresql />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styleRight.right}>
        {/* MAIN SCREEN ELEMENT */}
        <div className={styleRightScreen.screen}>
          <img src={DP} alt="Here supposed to be an image, right?" />
        </div>

        {/* MESSAGE ELEMENT */}
        <RotatingMessages items={messages} />
        {/* CODING ELEMENT */}
        <div className={styleRightSymbol.symbol}>
          <h4>{"</>"}</h4>
        </div>
      </section>
    </main>
  );
};
