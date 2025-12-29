import * as React from "react";
const MainLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    id="MainLogo"
    viewBox="0 0 357 365"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="MainLogoGroup">
      <path
        id="midstrip"
        d="M105.691 206.169H268V243.169H79L105.691 206.169Z"
        fill="white"
      />
      <path
        id="shortstrip"
        d="M137.667 154.169H233V191.169H112L137.667 154.169Z"
        fill="white"
      />
      <path
        id="Logn strip"
        d="M155.805 129.758L160.883 59.7824L337 278.454L274.86 278.454L155.805 129.758Z"
        fill="url(#paint0_linear_30_18)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_30_18"
        x1={251.005}
        y1={162.886}
        x2={185.706}
        y2={218.278}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5CE3EA" />
        <stop offset={0.5} stopColor="#458ABE" />
        <stop offset={1} stopColor="#2E3192" />
      </linearGradient>
    </defs>
  </svg>
);
export default MainLogo;
