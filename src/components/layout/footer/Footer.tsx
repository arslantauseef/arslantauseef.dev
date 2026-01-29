import Logo from "../../../assets/Icons/PNG-Polygons.png"
import "../../../styles/layout/footer/main-footer.css"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="ar-footer">
            <div className="up-footer">
                <section className="left-footer" >
                    <div id="left-footer-up">
                        <img src={Logo} alt="" />
                        <h3>Arslan Tauseef</h3>
                    </div>
                    <div id="left-footer-down">
                        <ul>
                            <li><a href=""><FaSquareXTwitter /></a></li>
                            <li><a href=""><FaSquareGithub /></a></li>
                            <li><a href=""><FaLinkedin /></a></li>
                            <li><a href=""><FaLinkedin /></a></li>
                        </ul>
                    </div>
                </section>
                <section className="middle-footer">
                    <div className="footer-column">
                        <h2>Projects</h2>
                        <ul>
                            <li>TrendSphere</li>
                            <li>Portfolio Website</li>
                            <li>E-commerce Website</li>
                            <li>Open Source Contributions</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h2>Skills</h2>
                        <ul>
                            <li>React / TypeScript</li>
                            <li>PostgreSQL / MongoDB</li>
                            <li>Python / FastAPI</li>
                            <li>REST API</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h2>Sections</h2>
                        <ul>
                            <li>Home</li>
                            <li>Projects</li>
                            <li>About</li>
                        </ul>
                    </div>
                </section>

            </div>
            <hr />
            <div className="down-footer">

                <p
                    style={{
                        fontSize: "0.8rem",
                        fontFamily: "'Inter', sans-serif",
                        color: "#666",
                        letterSpacing: "0.5px",
                        lineHeight: 1.4,
                    }}
                >
                    &copy; {new Date().getFullYear()} reserved to <span style={{
                        fontSize: "0.8rem",
                        fontFamily: "'Inter', sans-serif",
                        color: "#666",
                        letterSpacing: "0.5px",
                        lineHeight: 1.4,
                    }}>Arslan Tauseef</span>
                </p>


            </div>
        </footer>
    )
}
