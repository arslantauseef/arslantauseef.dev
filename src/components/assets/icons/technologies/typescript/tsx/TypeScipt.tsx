import { SiTypescript } from "react-icons/si";
type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
  cardRef?: React.Ref<HTMLDivElement>;
};
export const TypeScript = (props: Props) => {
  return (
    <div
      id={props.id}
      className={props.className}
      style={props.style}
      ref={props.cardRef}
    >
      <SiTypescript style={props.svgStyle} />
      <span style={props.spanStyle}>TypeScript</span>
    </div>
  );
};
