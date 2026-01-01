import "../styles/header/header.css";
import "../styles/header_left/css/header__left.css";
import "../styles/header_right/css/header__right.css";
import "../styles/header_right/animations/ar-cta/ar-cta.css";
import Polygons from "../../../../assets/SVGcomponents/Primary/Polygons";
import { motion } from "motion/react";

const blobFrames = [
  "74% 90% 91% 56% / 76% 58% 84% 91% ",
  "74% 90% 56% 73% / 76% 58% 84% 91% ",
  "72% 90% 50% 87% / 76% 92% 84% 91% ",
  "98% 90% 100% 55% / 86% 75% 84% 91% ",
  "65% 100% 83% 100% / 100% 74% 68% 68%",
  "99% 100% 96% 82% / 100% 65% 100% 100%",
  "65% 100% 67% 54% / 100% 74% 68% 68%  ",
  "70% 100% 70% 82% / 100% 74% 86% 68% ",
  "100% 100% 70% 82% / 100% 74% 86% 68% ",
  "100% 55% 70% 100% / 100% 74% 86% 68% ",
  "74% 90% 91% 56% / 76% 58% 84% 91% ",
];

const circles = [
  {
    width: "140px",
    height: "140px",
    opacity: 0.45,
  },
  {
    width: "230px",
    height: "230px",
    opacity: 0.35,
  },
  {
    width: "320px",
    height: "320px",
    opacity: 0.25,
  },
  {
    width: "410px",
    height: "410px",
    opacity: 0.15,
  },
  {
    width: "500px",
    height: "500px",
    opacity: 0.1,
  },
];

export const Header = () => {
  return (
    <header className="ar-header">
      <div className="ar-header-left">
        {circles.map((circles, index) => {
          return (
            <motion.div
              className="circles"
              key={index}
              style={{
                width: circles.width,
                height: circles.height,
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
        <Polygons />
      </div>
      {/* SEPERATOR */}
      <nav className="ar-header-right" aria-label="Main navigation">
        <ul className="ar-nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
        </ul>
        <div className="ar-cta">
          <motion.a
            href="/contact"
            animate={{
              borderRadius: blobFrames,
            }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            CONTACT!
          </motion.a>
        </div>
      </nav>
    </header>
  );
};
