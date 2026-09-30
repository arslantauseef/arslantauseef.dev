import { DashboardSidebar } from "../../DashboardSidebar/tsx/DashboardSidebar";
import { Outlet } from "react-router-dom";
import style from "../styles/style.main.module.css";
export const DashboardOutlet = () => {
  return (
    <div id={style.root2}>
      <DashboardSidebar />
      <Outlet />
    </div>
  );
};
