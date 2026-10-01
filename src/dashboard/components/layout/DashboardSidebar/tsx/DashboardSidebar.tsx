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
        <hr
          style={{
            width: "100%",
            border: "1px solid #eaeaea",
          }}
        />
        <nav className={`${styleNav.navbar} ${resStyle.navbar}`}>
          <ul className={`${styleNav.navitems} ${resStyle.navitems}`}>
            {navs.map((item, index) => {
              const Icons = item.icon;
              return (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styleNav.active : ""
                    }
                    to={item.to}
                    end
                    aria-label={item.name}
                    title={item.name}
                  >
                    <Icons />
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
