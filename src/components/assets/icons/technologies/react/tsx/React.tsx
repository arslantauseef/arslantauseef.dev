import { FaReact } from "react-icons/fa";
type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
  cardRef?: React.Ref<HTMLDivElement>;
};

export const ReactJs = (props: Props) => {
  return (
    <div
      id={props.id}
      className={props.className}
      style={props.style}
      ref={props.cardRef}
    >
      <FaReact style={props.svgStyle} />
      <span style={props.spanStyle}>React</span>
    </div>
  );
};
