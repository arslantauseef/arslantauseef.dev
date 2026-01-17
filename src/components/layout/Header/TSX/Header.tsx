import HM from "../../Header/Styles/Header/Header.module.css"
import HLM from "../../Header/Styles/Left/Header.left.module.css"
import HRM from "../../Header/Styles/Right/Header.right.module.css"
import Emblem from "../Assets/SVGComponents/Emblem/Emblem";
import { motion } from "motion/react";
import { NavigationBarButtons } from "../Features/ReusableButtons/NavigationBarButtons/TSX/NavigationBarButtons";
import { circles } from "../Constants/circles";
import { ArrayNavButtons } from "../Constants/ArrayNavButtons";
import { useEffect, useState } from "react";
import { handleRippleOnClick } from "../Features/RippleEffects/RippleEffects";

export const Header = () => {
  const [ripples, setRipples] = useState<{
    [key: number]: { x: number; y: number; size: number } | null;
  }>({});

  useEffect(()=>{
  },[ripples])
  return (
    <header className={HM["ar-header"]}>
      <div className={HLM["ar-header-left"]}>
        {circles.map((circles, index) => {
          return (
            <motion.div
              className={HLM[`circles`] + ` ` + HLM[`circle-${index}`]}
              key={index}
              style={{
                opacity: circles.opacity,
              }}
              animate={{
                scale: [1, 1.02, 1],
                opacity: [
                  circles.opacity,
                  circles.opacity + 0.05,
                  circles.opacity,
                ],
                transition: {
                  duration: 1,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatDelay: 5,
                },
              }}
            ></motion.div>
          );
        })}
        <Emblem />
      </div>
      {/* SEPERATOR */}
      <nav className={HRM["ar-header-right"]} aria-label="Main navigation">
        <ul className={HRM["ar-nav-list"]}>
          {ArrayNavButtons.map((button, index) => {
            return (
              <li key={index}>
                <NavigationBarButtons
                  variant="primary"
                  size="medium"
                  onClick={(e) => handleRippleOnClick(e, index, setRipples)}
                >
                  {button.label}
                  {ripples[index] && (
                <span
                  className="ripple"
                  style={{
                    width: ripples[index]!.size,
                    height: ripples[index]!.size,
                    left: ripples[index]!.x - ripples[index]!.size / 2,
                    top: ripples[index]!.y - ripples[index]!.size / 2,
                  }}
                  onAnimationEnd={() =>
                    setRipples(prev => ({ ...prev, [index]: null }))
                  }
                />
              )}
                </NavigationBarButtons>
              </li>
            );
          })}
        </ul>
        <div className={HRM["ar-cta"]}>
          <a href="/contact">
            <div id={HRM["ar-cta-mask"]}>
              <div id={HRM["ar-cta-glow"]}></div>
            </div>
            CONTACT
          </a>
        </div>
      </nav>
    </header>
  );
};
