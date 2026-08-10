import { NavLink } from "react-router-dom";
import styleHeader from "../styles/header.module.css";
import styleMiddle from "../styles/header.mid.module.css";
import styleLeft from "../styles/header.left.module.css";
import styleRight from "../styles/header.right.module.css";
import Logo from "../SVG/logo/Logo";
import {
  NavigationMenuButtons,
  navItems,
} from "../features/NavigationMenuButtons/tsx/NavigationMenuButtons";

export const Header = () => {
  return (
    <header className={styleHeader.header}>
      <NavLink to="/home" className={styleLeft.logoLink}>
        <Logo />
        <h4>Arslan Tauseef</h4>
      </NavLink>
      <nav className={styleMiddle.middle}>
        <NavigationMenuButtons
          items={navItems.filter((item) => item.label !== "Contact")}
        />
      </nav>
      <div className={styleRight.right}>
        <div>Contact</div>
      </div>
    </header>
  );
};
