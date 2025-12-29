import "../styles/header.css";
import "../styles/header__right.css"
import "../styles/header__left.css"

import MainLogo from "../../../../assets/SVGcomponents/MainLogo/MainLogo";

export const Header = () => {
  return (
    <>
      <header className="ar-header">
        <ul id="ar-ul">
            <li><MainLogo /></li>
            <li>
                <nav className="ar-nav">
                    <ul>
                        <li><button className="h-buttons">HOME</button></li>
                        <li><button className="h-buttons">PROJECTS</button></li>
                        <li><button className="h-buttons">ABOUT ME</button></li>
                        <li><button className="h-buttons">HIRE ME</button></li>
                    </ul>
                </nav>
            </li>
        </ul>
      </header>
    </>
  );
};
