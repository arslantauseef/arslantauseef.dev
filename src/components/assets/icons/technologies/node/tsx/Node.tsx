import { FaNode } from "react-icons/fa6";
import type React from "react";
type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
  cardRef?: React.Ref<HTMLDivElement>; 
};

export const Node = (props: Props) => {
  return (
    <div id={props.id} className={props.className} style={props.style} ref={props.cardRef}>
        <FaNode style={props.svgStyle}/>
        <span style={props.spanStyle}>Node</span>
    </div>
  )
}
