import styleNode from "../styles/node.module.css"
import { FaNode } from "react-icons/fa6";
import type React from "react";
type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
};

export const Node = (props: Props) => {
  return (
    <div id={props.id} className={props.className} style={props.style}>
        <FaNode style={props.svgStyle}/>
        <span style={props.spanStyle}>Node</span>
    </div>
  )
}
