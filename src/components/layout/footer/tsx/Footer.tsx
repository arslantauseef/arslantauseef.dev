import style from "../styles/footer.module.css";
import styleTop from "../styles/footer.top.module.css";
import styleBottom from "../styles/footer.bottom.module.css";
import styleTopLeft from "../styles/footer.top.left.module.css";
import styleTopRight from "../styles/footer.top.right.module.css";
import styleBottomLeft from "../styles/footer.bottom.left.module.css";
import styleBottomRight from "../styles/footer.bottom.right.module.css";
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
      {/*  */}
      {/*  */}
      {/*  */}
      <section className={styleBottom.bottomFooter}>
        <div className={styleBottom.bottomFooter_top}>
          <div className={styleBottom.wrapper}>
            <div className={styleBottomLeft.left}>
              <div className={styleBottomLeft.grid}>
                <div>
                  <img src={LogoPNG} alt="" />
                  <h5>arslantauseef.dev</h5>
                </div>
                <div>
                  <p>
                    A great website is more than a polished interface; it is a
                    balance of clean code, thoughtful design, speed, and
                    usability.
                  </p>
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
            <hr
              style={{
                height: "90%",
                alignSelf: "center",
              }}
            />
            <div className={styleBottomRight.right}>
              <div className={styleBottomRight.wrapper}>
                <div>
                  <h3>Explore</h3>
                  <ul>
                    <li>Tools</li>
                    <li>Projects</li>
                    <li>Features</li>
                  </ul>
                </div>

                <div>
                  <h3>Blog</h3>
                  <ul>
                    <li>How-to</li>
                    <li>Libraries</li>
                    <li>Components</li>
                  </ul>
                </div>

                <div>
                  <h3>Information</h3>
                  <ul>
                    <li>Contact</li>
                    <li>GitHub</li>
                    <li>Experience</li>
                    <li>About</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styleBottom.bottomFooter_bottom}>
          <ul>
            <li>
              <span>©</span>{" "}
              <span>2026</span>{" "}
              <span>arslantauseef.dev.</span>{" "}
              <span>All rights reserved.</span>
            </li>
            <li>
              <span>Designed & created by</span> <span>Arslan Tauseef.</span>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
