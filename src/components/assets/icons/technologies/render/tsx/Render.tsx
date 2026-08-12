import { SiRender } from "react-icons/si";
type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
};

export const Render = (props: Props) => {
  return (
    <div id={props.id} className={props.className} style={props.style} >
        <SiRender style={props.svgStyle} />
        <span style={props.spanStyle} >Render</span>
    </div>
  )
}
