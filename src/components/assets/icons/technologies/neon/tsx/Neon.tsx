import { SiNeon } from "react-icons/si";
import styleNeon from "../styles/neon.module.css";
import type React from "react";
type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
};



export const Neon = (props: Props) => {
  return (
    <div id={props.id} className={props.className} style={props.style}>
      <SiNeon style={props.svgStyle} />
      <span style={props.spanStyle} >Neon</span>
    </div>
  );
};
