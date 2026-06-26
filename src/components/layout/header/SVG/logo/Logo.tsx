import type { SVGProps } from "react";
import styleLeft from "../../styles/header.left.module.css"

type logoProps = SVGProps<SVGSVGElement>

const Logo = (props: logoProps) => (
  <svg
    width={670}
    height={670}
    viewBox="0 0 670 670"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styleLeft.logo}
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M135 89h399.949c25.405 0 46 20.595 46 46v399.949c0 25.405-20.595 46-46 46H135c-25.405 0-46-20.595-46-46V135l.004-.595C89.322 109.274 109.793 89 135 89Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={8}
      />
      <path
        d="m410.203 189.94-185.954-21.369 100.474 93.125 70.627 217.368 76.714 60.372 23.477-127.225z"
        fill="url(#b)"
      />
      <path
        d="m224.323 167.925-.148 1.292 50.558 5.81 135.396 15.559-.532-.413 85.337 222.271-.033-.351-23.476 127.225 1.041-.393-76.714-60.372.216.31-70.627-217.368-.052-.161-.124-.115-63.15-58.531-37.324-34.594-.884.954 37.324 34.594 63.15 58.531-.176-.276 70.627 217.368.061.188.155.122 76.714 60.372.846.666.196-1.059 23.476-127.225.033-.18-.066-.171-85.337-222.271-.141-.367-.391-.045-135.397-15.56zm-.148 1.292.148-1.292-1.971-.226 1.455 1.349.884-.954z"
        fill="#000"
      />
      <path
        d="m309.102 282.02-92.899-86.821 1.626 324.224z"
        fill="url(#c)"
        stroke="#000"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={456.799}
        y1={317.012}
        x2={264.799}
        y2={404.512}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={0.56} stopColor="#666" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={316.799}
        y1={263.012}
        x2={160.799}
        y2={349.012}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopColor="#666" />
      </linearGradient>
      <filter
        id="a"
        x={0}
        y={0}
        width={669.949}
        height={669.949}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={42.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_27_108" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_27_108"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default Logo;
