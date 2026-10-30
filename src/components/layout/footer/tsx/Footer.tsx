import style from "../styles/footer.module.css";
import styleTop from "../styles/top/footer.top.module.css";
import styleBottom from "../styles/bottom/footer.bottom.module.css";
import styleTopLeft from "../styles/top/footer.top.left.module.css";
import styleTopRight from "../styles/top/footer.top.right.module.css";
import styleBottomLeft from "../styles/bottom/footer.bottom.left.module.css";
import styleBottomRight from "../styles/bottom/footer.bottom.right.module.css";
import LogoPNG from "../../../assets/icons/pngs/Logo.png";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiExpress, SiVercel } from "react-icons/si";
import { MdArrowOutward, MdArrowBack, MdCheck, MdClose, MdPause, MdPlayArrow } from "react-icons/md";
import Logo from "../../../assets/svgs/logo/Logo";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const technologies = [
  { name: "React", Icon: FaReact }, { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: FaNodeJs }, { name: "Express", Icon: SiExpress },
  { name: "PostgreSQL", Icon: SiPostgresql }, { name: "Vercel", Icon: SiVercel },
];

const services = ["Web development", "Frontend & UI", "Full stack app", "Something else"];

export const Footer = () => {
  const [isForumActive, setIsForumActive] = useState(true);
  const [isStackPaused, setIsStackPaused] = useState(false);
  const [message, setMessage] = useState("");
  const [service, setService] = useState(services[0]);
  const [isFormReady, setIsFormReady] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const isOpen = !isForumActive;

  const handleClick = () => {
    setIsForumActive((previous) => !previous);
    setIsFormReady(false);
  };

  return (
    <footer className={`${style.footer} ${isOpen ? style.open : ""}`}>
      <section className={styleTop.topFooter}>
        <div className={`${styleTopLeft.left} ${isOpen ? styleTopLeft.hidden : ""}`} aria-hidden={isOpen}>
          <span className={styleTopLeft.kicker}>GOOD WORK STARTS WITH A CONVERSATION</span>
          <h2>Let's <br />connect<span>.</span></h2>
          <p>Your next idea deserves a great website.</p>
        </div>
        <div className={`${styleTopRight.right} ${isOpen ? styleTopRight.expanded : ""}`}>
          <div className={styleTopRight.cardStage} inert={isOpen} onTransitionEnd={(event) => {
            if (!isOpen && event.target === event.currentTarget && event.propertyName === "opacity") {
              openButton.current?.focus({ preventScroll: true });
            }
          }}>
            <div className={styleTopRight.cardFloat}>
            <div className={styleTopRight.card} onPointerMove={(event) => {
              if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
              const bounds = event.currentTarget.getBoundingClientRect();
              const x = (event.clientX - bounds.left) / bounds.width;
              const y = (event.clientY - bounds.top) / bounds.height;
              event.currentTarget.style.setProperty("--tilt-x", `${8 + (0.5 - y) * 12}deg`);
              event.currentTarget.style.setProperty("--tilt-y", `${-12 + (x - 0.5) * 16}deg`);
              event.currentTarget.style.setProperty("--shine-x", `${x * 100}%`);
            }} onPointerLeave={(event) => {
              event.currentTarget.style.removeProperty("--tilt-x");
              event.currentTarget.style.removeProperty("--tilt-y");
              event.currentTarget.style.removeProperty("--shine-x");
            }}>
              <div className={styleTopRight.cardTop}>
                <Logo className={styleTopRight.cardLogo} />
                <span className={styleTopRight.cardEdition}>INDEPENDENT DEVELOPER<span>DESIGN · CODE · DELIVER</span></span>
              </div>
              <div className={styleTopRight.cardIdentity}>
                <span>Arslan Tauseef</span>
                <p>Full Stack Web Developer</p>
              </div>
              <div className={styleTopRight.cardOrbit} aria-hidden="true"><i /><i /><i /><span>+</span></div>
              <div className={styleTopRight.cardDetails}><span>arslantauseef.dev</span><span className={styleTopRight.available}><i /> OPEN FOR PROJECTS</span></div>
              <button ref={openButton} className={styleTopRight.cardButton} type="button" onClick={handleClick} aria-expanded={isOpen} aria-controls="footer-contact">
                <span>LET'S MAKE SOMETHING GREAT</span><strong>GET IN TOUCH <span><MdArrowOutward aria-hidden="true" /></span></strong>
              </button>
            </div>
            </div>
          </div>
          <div id="footer-contact" className={styleTopRight.panel} inert={!isOpen} aria-hidden={!isOpen}
            onKeyDown={(event) => { if (event.key === "Escape" && isOpen) handleClick(); }}
            onTransitionEnd={(event) => {
              if (isOpen && event.target === event.currentTarget && event.propertyName === "opacity") {
                closeButton.current?.focus({ preventScroll: true });
              }
            }}>
            <aside className={styleTopRight.panelIntro}>
              <span className={styleTopRight.eyebrow}><i /> LET'S MAKE IT HAPPEN</span>
              <h2>A good idea. <br />A great <br /><em>next step.</em></h2>
              <p>Tell me what you're thinking.<br />We'll take it from there.</p>
              <div className={styleTopRight.signature}>
                <Logo className={styleTopRight.signatureLogo} />
                <div><strong>Arslan Tauseef</strong><span>Your next development partner</span></div>
              </div>
            </aside>
            <div className={styleTopRight.formSurface}>
              <div className={styleTopRight.formHeader}>
                <div><span className={styleTopRight.formKicker}>A LITTLE ABOUT YOUR PROJECT</span><h3>Let's build something great.</h3></div>
                <button ref={closeButton} type="button" className={styleTopRight.closeButton} onClick={handleClick} aria-label="Close contact panel"><MdClose /></button>
              </div>
              <form className={styleTopRight.form} onSubmit={(event) => { event.preventDefault(); setIsFormReady(true); }} onChange={() => setIsFormReady(false)}>
                <fieldset className={styleTopRight.services}>
                  <legend>I'm interested in</legend>
                  <div className={styleTopRight.serviceOptions}>
                    {services.map((option) => <label key={option} className={service === option ? styleTopRight.selected : ""}>
                      <input type="radio" name="service" value={option} checked={service === option} onChange={() => setService(option)} />
                      {service === option && <MdCheck aria-hidden="true" />}{option}
                    </label>)}
                  </div>
                </fieldset>
                <div className={styleTopRight.fields}>
                  <label>Your name <span>*</span><input name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} /></label>
                  <label>Email address <span>*</span><input name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={254} /></label>
                </div>
                <label className={styleTopRight.messageLabel}>What's the idea? <span>*</span>
                  <textarea name="message" placeholder="A new website, a big idea, or something that needs a fresh perspective…" required minLength={10} maxLength={2000} rows={3} value={message} onChange={(event) => setMessage(event.target.value)} />
                </label>
                <div className={styleTopRight.messageMeta}><span>A few details are all it takes.</span><span>{message.length} / 2000</span></div>
                <div className={styleTopRight.formActions}>
                  <span>Great things start<br />with a simple hello.</span>
                  <button type="submit" className={styleTopRight.submitButton}>Let's talk <MdArrowOutward aria-hidden="true" /></button>
                </div>
                <p className={styleTopRight.status} role="status">{isFormReady ? "Looking good! This is a form preview; your message hasn't been sent." : ""}</p>
              </form>
              <button type="button" className={styleTopRight.backButton} onClick={handleClick}><MdArrowBack aria-hidden="true" /> Back to the footer</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styleBottom.bottomFooter} inert={isOpen} aria-hidden={isOpen}>
        <div className={styleBottom.bottomFooter_top}>
          <div className={styleBottom.wrapper}>
            <div className={styleBottomLeft.left}>
              <Link to="/home" className={styleBottomLeft.brand} aria-label="Arslan Tauseef home"><img src={LogoPNG} alt="" /><span>arslantauseef<span>.dev</span></span></Link>
              <p>Interfaces with personality.<br /><span>Systems built to go further.</span></p>
              <div className={styleBottomLeft.specialties}><span>Websites</span><span>Web apps</span><span>APIs</span></div>
              <a className={styleBottomLeft.github} href="https://github.com/arslantauseef" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> Find me on GitHub <MdArrowOutward aria-hidden="true" /></a>
            </div>
            <nav className={styleBottomRight.right} aria-label="Footer navigation">
              <div><h3>FIND YOUR WAY</h3>{[{ path: "/home", label: "Home" }, { path: "/projects", label: "Projects" }, { path: "/features", label: "Features" }, { path: "/about", label: "About me" }].map((item, index) => <Link key={item.path} to={item.path}><span className={styleBottomRight.linkNumber}>0{index + 1}</span>{item.label}<MdArrowOutward aria-hidden="true" /></Link>)}</div>
              <div><h3>HAVE SOMETHING IN MIND?</h3><p>Let's turn your idea<br />into something real.</p><button type="button" onClick={handleClick}>Start a conversation <MdArrowOutward aria-hidden="true" /></button><span className={styleBottomRight.availability}><i /> Open for projects</span><div className={styleBottomRight.location}><span className={styleBottomRight.globe} aria-hidden="true"><i /><i /><i /></span><span>Based in Pakistan<strong>Working worldwide</strong></span></div></div>
            </nav>
          </div>
        </div>
        <div className={styleBottom.stackRail}>
          <span className={styleBottom.stackLabel}>TOOLS OF MY TRADE <span>THE STACK BEHIND THE WORK</span></span>
          <div className={styleBottom.stackWindow}>
            <div className={`${styleBottom.stackTrack} ${isStackPaused ? styleBottom.paused : ""}`}>
              {[0, 1].map((copy) => <ul key={copy} aria-hidden={copy === 1}>{technologies.map(({ name, Icon }) => <li key={name}><Icon aria-hidden="true" /><span>{name}</span><i aria-hidden="true" /></li>)}</ul>)}
            </div>
          </div>
          <button type="button" className={styleBottom.pauseButton} aria-label={isStackPaused ? "Play technology animation" : "Pause technology animation"} onClick={() => setIsStackPaused((paused) => !paused)}>{isStackPaused ? <MdPlayArrow /> : <MdPause />}</button>
        </div>
        <div className={styleBottom.bottomFooter_bottom}>
          <span>© {new Date().getFullYear()} Arslan Tauseef. All rights reserved.</span>
          <span>Designed & built with intention.</span>
          <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }}>Back to top ↑</a>
        </div>
      </section>
    </footer>
  );
};
