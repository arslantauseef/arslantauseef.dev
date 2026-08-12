import styleRailway from "../styles/railway.module.css"
import { SiRailway } from "react-icons/si";
type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
};


export const Railway = (props: Props) => {
  return (
    <div id={props.id} className={props.className} style={props.style}>
      <SiRailway style={props.svgStyle} />
      <span style={props.spanStyle} >Railway</span>
    </div>
  );
};
