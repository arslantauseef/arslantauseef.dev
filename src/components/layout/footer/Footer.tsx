import Logo from "../../../assets/Icons/PNG-Polygons.png"
import "../../../styles/layout/footer/main-footer.css"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="ar-footer">
            <div className="up-footer">
                <section className="left-footer">
                    <div className="branding">
                        <div aria-label="footer logo"><img src={Logo} style={{ width: "100%", height: "100%" }} alt="footer-logo" /></div>
                        <h1 aria-label="Name in footer section">Arslan Tauseef</h1>
                    </div>
                    <address>
                        <ul>
                            <li><a href=""><FaSquareXTwitter /></a></li>
                            <li><a href=""><FaSquareGithub /></a></li>
                            <li><a href=""><FaLinkedin /></a></li>
                        </ul>
                    </address>
                </section>
                <section className="right-footer">
                    <nav>
                        <div>
                            <h3>Explore</h3>
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Projects</a></li>
                                <li><a href="">Services</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="">Notes</a></li>
                                <li><a href="">Tutorials</a></li>
                                <li><a href="">Libraries</a></li>
                            </ul>
                        </div>
                    </nav>
                </section>
            </div>
            <hr />
            <div className="down-footer">
                @ Copyrights reserved to Arslan Tauseef
            </div>
        </footer>
    )
}
