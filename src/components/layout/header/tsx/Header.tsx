import { NavLink } from "react-router-dom";
import styleHeader from "../styles/header.module.css";
import styleMiddle from "../styles/header.mid.module.css";
import styleLeft from "../styles/header.left.module.css"
import Logo from "../SVG/logo/Logo";
import { NavButtons, navItems } from "../features/nav_buttons/tsx/NavButtons";

export const Header = () => {
  return (
    <header className={styleHeader.header}>
      <NavLink to="/home" className={styleLeft.logoLink}>
        <Logo />
      </NavLink>
      <nav className={styleMiddle.middle}>
        <NavButtons
          items={navItems.filter((item) => item.label !== "Contact")}
        />
      </nav>
      <div >
        <NavButtons
          items={navItems.filter((item) => item.label === "Contact")}
        />
      </div>
    </header>
  );
};
