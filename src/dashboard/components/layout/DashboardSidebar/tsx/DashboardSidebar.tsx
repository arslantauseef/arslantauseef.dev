import style from "../styles/main/style.main.module.css";
import styleHeader from "../styles/header/style.header.module.css";
import styleNav from "../styles/nav/style.nav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../../../components/assets/svgs/logo/Logo";
import { navs } from "../constants/Constants";
import styleFooter from "../styles/footer/footer.module.css";
import resStyle from "../responsive_styles/nav/res_nav.module.css";
import resHeader from "../responsive_styles/header/res_header.module.css";
import resMain from "../responsive_styles/main/res_main.module.css";
export const DashboardSidebar = () => {
  return (
    <aside className={`${style.container} ${resMain.container}`}>
      <div className={style.wrapper}>
        <div className={`${styleHeader.header} ${resHeader.header}`}>
          <div className={`${styleHeader.grid} ${resHeader.grid}`}>
            <Logo className={styleHeader.logo} />
            <h2>arslantauseef.dev</h2>
          </div>
        </div>
        <hr className={styleHeader.divider} />
        <nav
          className={`${styleNav.navbar} ${resStyle.navbar}`}
          aria-label="Dashboard navigation"
        >
          <ul className={`${styleNav.navitems} ${resStyle.navitems}`}>
            {navs.map((item) => {
              const Icons = item.icon;
              return (
                <li key={item.name}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styleNav.active : ""
                    }
                    to={item.to}
                    end
                    aria-label={item.name}
                    title={item.name}
                  >
                    <Icons aria-hidden="true" />
                    <span>{item.name}</span>
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
