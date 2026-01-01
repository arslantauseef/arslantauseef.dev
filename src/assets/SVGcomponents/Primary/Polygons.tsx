import { motion, type SVGMotionProps } from "motion/react";

const Polygons = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    className="SVGPolygon"
    width={378}
    height={413}
    viewBox="0 0 378 413"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Polygons">
      <motion.path
        animate={{
          rotate: [0, 15, -15, 0],
          filter: [
            "drop-shadow(0 0 0 rgba(80,243,255,0))",
            "drop-shadow(0 0 20px rgba(137, 247, 255, 1))",
            "drop-shadow(0 0 20px rgba(137, 247, 255, 1))",
            "drop-shadow(0 0 0 rgba(80,243,255,0))",
          ],
          transition: { duration: 1, repeat: Infinity, repeatDelay: 5 },
        }}
        id="DNarrow"
        d="M215.839 365.583c-11.935 20.65-41.743 20.65-53.678 0L26.884 131.532c-11.945-20.666 2.969-46.513 26.839-46.513h270.554c23.87 0 38.784 25.847 26.84 46.513z"
        fill="url(#paint0_linear_93_1053)"
      />
      <motion.path
        animate={{
          rotate: [0, -15, 15, 0],
          filter: [
            "drop-shadow(0 0 0 rgba(80,243,255,0))",
            "drop-shadow(0 0 200px rgba(137, 247, 255, 1))",
            "drop-shadow(0 0 200px rgba(137, 247, 255, 1))",
            "drop-shadow(0 0 0 rgba(80,243,255,0))",
          ],
          transition: { duration: 1, repeat: Infinity, repeatDelay: 5 },
        }}
        id="UParrow"
        d="M215.842 46.437c-11.935-20.65-41.744-20.65-53.679 0L26.886 280.487C14.94 301.154 29.856 327 53.726 327H324.28c23.87 0 38.784-25.846 26.839-46.513z"
        fill="url(#paint1_linear_93_1053)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_93_1053"
        x1={196.225}
        y1={377.52}
        x2={196.225}
        y2={50.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.014} stopColor="#fff" />
        <stop offset={1} stopColor="#d3f2ff" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_93_1053"
        x1={189.002}
        y1={0}
        x2={189.002}
        y2={327}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ace5ff" />
        <stop offset={1} stopColor="#0087c5" />
      </linearGradient>
    </defs>
  </motion.svg>
);
export default Polygons;
