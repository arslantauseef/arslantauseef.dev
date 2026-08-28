import { BiLogoPostgresql } from "react-icons/bi";

type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
  cardRef?: React.Ref<HTMLDivElement>;
};

export const PostgreSQL = (props: Props) => {
  return (
    <div id={props.id} className={props.className} style={props.style} ref={props.cardRef}>
      <BiLogoPostgresql style={props.svgStyle} />
      <span style={props.spanStyle}>PostgreSQL</span>
    </div>
  );
};
