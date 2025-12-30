import "../styles/header/header.css";
import "../styles/header_left/css/header__left.css";
import "../styles/header_right/css/header__right.css";
import "../styles/header_right/animations/ar-cta/ar-cta.css";

import MainLogo from "../../../../assets/SVGcomponents/MainLogo/MainLogo";
import ArslanTauseef from "../../../../assets/SVGcomponents/ArslanTauseef/ArslanTauseef";

export const Header = () => {
  return (
    <header className="ar-header">
      <div className="ar-header-left">
        <MainLogo />
        <ArslanTauseef />
      </div>
      {/* SEPERATOR */}
      <nav className="ar-header-right" aria-label="Main navigation">
        <ul className="ar-nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About Me</a></li>
        </ul>
        <div className="ar-cta">
          <a href="/contact">Hire Me</a>
        </div>
      </nav>
    </header>
  );
};
