import style from "../styles/main/style.main.module.css";
import styleHeader from "../styles/header/style.header.module.css";
import styleNav from "../styles/nav/style.nav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../../../components/assets/svgs/logo/Logo";
import { navs } from "../constants/Constants";
import styleFooter from "../styles/footer/footer.module.css";

export const DashboardSidebar = () => {
  return (
    <aside className={style.container}>
      <div className={style.wrapper}>
        <div className={styleHeader.header}>
          <div className={styleHeader.grid}>
            <Logo className={styleHeader.logo} />
            <h2>arslantauseef.dev</h2>
          </div>
        </div>
        <hr style={{
          width: "100%",
          border: "1px solid #eaeaea"
        }} />
        <nav className={styleNav.navbar}>
          <ul className={styleNav.navitems}>
            {navs.map((item, index) => {
              const Icons = item.icon;
              return (
                <li key={index}>
                  <Icons />
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styleNav.active : ""
                    }
                    to={item.to}
                    end
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styleFooter.footer}></div>
      </div>
    </aside>
  );
};
