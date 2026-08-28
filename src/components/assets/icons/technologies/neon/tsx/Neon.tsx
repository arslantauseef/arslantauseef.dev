import { SiNeon } from "react-icons/si";
import type React from "react";
type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
  cardRef?: React.Ref<HTMLDivElement>; 
};

export const Neon = (props: Props) => {
  return (
    <div id={props.id} className={props.className} style={props.style} ref={props.cardRef}>
      <SiNeon style={props.svgStyle} />
      <span style={props.spanStyle}>Neon</span>
    </div>
  );
};
