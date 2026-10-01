import { DashboardSidebar } from "../../DashboardSidebar/tsx/DashboardSidebar";
import { Outlet } from "react-router-dom";
import style from "../styles/style.main.module.css";
import resStyle from "../../DashboardSidebar/responsive_styles//main/res_main.module.css"
export const DashboardOutlet = () => {
  return (
    <div className={`${style.root2} ${resStyle.root2}`}>
      <DashboardSidebar />
      <Outlet />
    </div>
  );
};
