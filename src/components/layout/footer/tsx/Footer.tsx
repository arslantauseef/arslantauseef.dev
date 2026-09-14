import style from "../styles/footer.module.css";
import styleTop from "../styles/footer.top.module.css";
import styleBottom from "../styles/footer.bottom.module.css";
import styleTopLeft from "../styles/footer.top.left.module.css";
import styleTopRight from "../styles/footer.top.right.module.css";
import LogoPNG from "../../../assets/icons/pngs/Logo.png";
import { RiTwitterXLine } from "react-icons/ri";
import { FaBehanceSquare } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <section className={styleTop.topFooter}>
        <div className={styleTopLeft.left}>
          <ul>
            {/* <li>Click This Card Key To Connect...</li>
            <li>And see the animation</li> */}
          </ul>
        </div>
        <div className={styleTopRight.right}></div>
      </section>
      <section className={styleBottom.bottomFooter}>
        <div className={styleBottom.left}>
          <div className={styleBottom.left_grid}>
            <div>
              <img src={LogoPNG} alt="Arslan Tauseef" />
              <h5>arslantauseef.dev</h5>
            </div>
            <ul>
              <li>
                <RiTwitterXLine />
              </li>
              <li>
                <FaBehanceSquare />
              </li>
              <li>
                <FaSquareUpwork />
              </li>
              <li>
                <FaGithubSquare />
              </li>
              <li>
                <FaInstagramSquare />
              </li>
            </ul>
          </div>
        </div>
        <div className={styleBottom.right}></div>
      </section>
    </footer>
  );
};
