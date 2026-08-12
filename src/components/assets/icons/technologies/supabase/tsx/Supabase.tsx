import styleSupabase from "../styles/supabase.module.css"
import { RiSupabaseFill } from "react-icons/ri";
type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
};

export const Supabase = (props: Props) => {
  return (
    <div id={props.id} className={props.className} style={props.style} >
        <RiSupabaseFill style={props.svgStyle} />
        <span style={props.spanStyle} >Supabase</span>
    </div>
  )
}
