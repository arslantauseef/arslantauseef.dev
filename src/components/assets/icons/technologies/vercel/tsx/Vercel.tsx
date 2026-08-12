import { SiVercel } from "react-icons/si";
type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
};

export const Vercel = (props: Props) => {
  return (
    <div id={props.id} className={props.className} style={props.style}>
      <SiVercel style={props.svgStyle} />
      <span style={props.spanStyle}>Vercel</span>
    </div>
  );
};
