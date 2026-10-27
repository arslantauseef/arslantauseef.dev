import styleTopBar from "../styles/topbar/topbar.module.css";
import { IoNotifications } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useMatches } from "react-router-dom";

type RouteHandle = {
  breadcrumb?: string;
};
export const DashboardHeader = () => {
  const nestLocation = useMatches()
    .flatMap((item) => {
      const handle = item.handle as RouteHandle | undefined;
      return handle?.breadcrumb;
    })
    .filter(Boolean);
  return (
    <section className={styleTopBar.topbar}>
      {nestLocation.map((breadcrumb, index) => {
        return <div className={styleTopBar.left}><span key={index}>{index > 0 && " > "}{breadcrumb}</span></div>;
      })}
      <div className={styleTopBar.right}>
        <IoNotifications />
        <MdLogout />
      </div>
    </section>
  );
};
