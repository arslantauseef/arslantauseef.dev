import { SiExpress } from "react-icons/si";
import type React from "react";
type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
};

export const Express = ({ id, className, style, svgStyle, spanStyle }: Props) => {
  return (
    <div id={id} className={className} style={style}>
      <SiExpress style={svgStyle} />
      <span style={spanStyle} >Express</span>
    </div>
  );
};
