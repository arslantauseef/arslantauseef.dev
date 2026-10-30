import { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiCss, SiExpress, SiRedis, SiPostgresql, SiDrizzle, SiNeon, SiSupabase, SiVercel, SiRender, SiRailway } from "react-icons/si";
import { MdArrowOutward, MdArrowDownward, MdCheck, MdLocationOn, MdTouchApp, MdCode, MdAccountTree } from "react-icons/md";
import portrait from "../../../../assets/images/picture.png";
import style from "../styles/about.module.css";

const stack = [
  { name: "Frontend", title: "What happens in the browser.", description: "I use React to organize interfaces into reusable components, TypeScript to make data and component contracts clear, and CSS to bring the layout and interactions together.", note: "Responsive layouts · Component structure · Interaction design", tools: [{ name: "React", Icon: FaReact }, { name: "TypeScript", Icon: SiTypescript }, { name: "CSS", Icon: SiCss }] },
  { name: "Backend", title: "The logic behind the interface.", description: "Node.js and Express connect the frontend to server-side logic through structured APIs. Redis adds a caching layer for frequently accessed data, helping reduce repeated work and keep responses fast.", note: "API structure · Server-side logic · Redis caching", tools: [{ name: "Node.js", Icon: FaNodeJs }, { name: "Express", Icon: SiExpress }, { name: "Redis", Icon: SiRedis }] },
  { name: "Database", title: "A place for the data to make sense.", description: "PostgreSQL provides a relational foundation for application data. I use Drizzle ORM for typed schemas and queries, alongside database platforms such as Neon and Supabase.", note: "Relational data · Typed queries · Schema management", tools: [{ name: "PostgreSQL", Icon: SiPostgresql }, { name: "Drizzle ORM", Icon: SiDrizzle }, { name: "Neon", Icon: SiNeon }, { name: "Supabase", Icon: SiSupabase }] },
  { name: "Deployment", title: "From a local build to a live experience.", description: "Vercel, Render, and Railway are part of how I bring frontend and backend applications online, connecting a working codebase with its runtime environment.", note: "Frontend delivery · Backend hosting · Environment configuration", tools: [{ name: "Vercel", Icon: SiVercel }, { name: "Render", Icon: SiRender }, { name: "Railway", Icon: SiRailway }] },
];

const process = [
  { name: "Discover", label: "Understand the brief", title: "Start with the right questions.", description: "Clarify who the product is for, what it should help them do, and which constraints need to shape the solution.", items: ["Understand the people using it", "Identify the essential flows", "Agree on the scope and priorities"] },
  { name: "Structure", label: "Connect the pieces", title: "Make the structure clear before the details.", description: "Break the product into understandable parts, then decide how the interface, application logic, and data should connect.", items: ["Outline the pages and components", "Define the API and data flow", "Choose appropriate tools"] },
  { name: "Build", label: "Develop the experience", title: "Build in complete, usable pieces.", description: "Develop a feature through its interface and supporting logic. Keep the implementation focused and check the behavior as it takes shape.", items: ["Build reusable interface components", "Connect data and server-side behavior", "Keep layouts responsive"] },
  { name: "Refine", label: "Check the whole journey", title: "Follow the journey beyond the happy path.", description: "Check the product as a whole, including the states that are easy to overlook. Refine what gets in the way of a clear experience.", items: ["Review loading, empty, and error states", "Check keyboard and small-screen use", "Tune interactions and visual details"] },
];

const values = [
  { Icon: MdTouchApp, title: "Clear interactions.", description: "Useful feedback, readable interfaces, keyboard access, and layouts that adapt without losing their purpose." },
  { Icon: MdCode, title: "Readable structure.", description: "Focused components, explicit data flow, and code that's understandable when it's time to change it." },
  { Icon: MdAccountTree, title: "Deliberate refinement.", description: "Check loading, empty, and error states. Follow the flow end to end. Keep improving the rough edges." },
];

export const About = () => {
  const [selectedStack, setSelectedStack] = useState(0);
  const [selectedStep, setSelectedStep] = useState(0);
  const page = useRef<HTMLElement>(null);
  const technology = stack[selectedStack];
  const step = process[selectedStep];

  useEffect(() => {
    const element = page.current;
    if (!element || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    element.setAttribute("data-animated", "true");
    element.querySelectorAll("[data-reveal]").forEach((section) => observer.observe(section));
    return () => { observer.disconnect(); element.removeAttribute("data-animated"); };
  }, []);

  const startConversation = () => {
    const trigger = document.querySelector<HTMLButtonElement>('button[aria-controls="footer-contact"]');
    if (trigger?.getAttribute("aria-expanded") === "false") trigger.click();
    trigger?.closest("footer")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  };

  return (
    <main ref={page} className={style.about}>
      <header className={style.pageHeading}>
        <div><span className={style.eyebrow}><i className={style.gradientDot} />THE PERSON BEHIND THE WORK</span><h1>About me.</h1></div>
        <span>Background, tools, and the way I work.</span>
      </header>

      <section className={style.profile} aria-labelledby="about-name">
        <figure className={style.portraitColumn}>
          <div className={style.photo}><img src={portrait} alt="Arslan Tauseef" width={4884} height={2255} fetchPriority="high" /></div>
          <figcaption><span>Arslan Tauseef</span><span>Pakistan <MdArrowOutward aria-hidden="true" /></span></figcaption>
        </figure>
        <div className={style.bio}>
          <h2 id="about-name">I'm Arslan Tauseef.</h2>
          <div className={style.role}>Full Stack Web Developer</div>
          <p>I work across the full web stack: <strong>interfaces in React and TypeScript, server-side applications in Node.js and Express, and data with PostgreSQL.</strong></p>
          <p>I'm interested in how all those pieces fit together. A page should be easy to use, the code should be easy to understand, and the system behind it should be dependable.</p>
          <p>I approach a project by understanding what it needs to do, choosing a clear structure, and refining the details as the whole experience comes together.</p>
          <div className={style.bioMeta}><span><MdLocationOn aria-hidden="true" />Based in Pakistan</span><span><i />Open for projects</span></div>
        </div>
      </section>

      <nav className={style.chapters} aria-label="About sections">
        <a href="#about-stack"><small>01</small> My stack <MdArrowDownward aria-hidden="true" /></a>
        <a href="#about-process"><small>02</small> How I work <MdArrowDownward aria-hidden="true" /></a>
        <a href="#about-values"><small>03</small> What I care about <MdArrowDownward aria-hidden="true" /></a>
      </nav>

      <section id="about-stack" className={style.contentSection} data-reveal aria-labelledby="about-stack-heading">
        <div className={style.sectionTitle}><span className={style.eyebrow}>01 / MY STACK</span><div><h2 id="about-stack-heading">The tools I use.<br />And where they fit.</h2><p>Different layers, connected by one goal: a complete web experience. Explore each part of my stack.</p></div></div>
        <div className={style.stackLayout}>
          <div className={style.stackMenu} role="group" aria-label="Explore technology layers">{stack.map((item, index) => <button key={item.name} type="button" aria-pressed={selectedStack === index} aria-controls="about-stack-detail" onClick={() => setSelectedStack(index)}>{item.name}<MdArrowOutward aria-hidden="true" /></button>)}</div>
          <div id="about-stack-detail" className={style.stackDetail} aria-live="polite" aria-atomic="true"><div key={technology.name} className={style.detailContent}>
            <ul className={style.stackTools}>{technology.tools.map(({ name, Icon }) => <li key={name}><Icon aria-hidden="true" />{name}</li>)}</ul>
            <h3>{technology.title}</h3><p>{technology.description}</p><div className={style.detailFooter}><span />{technology.note}</div>
          </div></div>
        </div>
      </section>

      <section id="about-process" className={`${style.contentSection} ${style.divided}`} data-reveal aria-labelledby="about-process-heading">
        <div className={style.sectionTitle}><span className={style.eyebrow}>02 / HOW I WORK</span><div><h2 id="about-process-heading">Understand it. Structure it.<br />Build it. Make it better.</h2><p>I like to make the important decisions early and leave room to refine the details. Here's how I would move through a project.</p></div></div>
        <div className={style.workSteps} role="group" aria-label="Project working process">{process.map((item, index) => <button type="button" key={item.name} aria-pressed={selectedStep === index} aria-controls="about-work-detail" onClick={() => setSelectedStep(index)}><small>0{index + 1} / {item.name.toUpperCase()}</small><strong>{item.label}</strong></button>)}</div>
        <div id="about-work-detail" className={style.workDetail} aria-live="polite" aria-atomic="true"><div key={step.name} className={style.workContent}><div><h3>{step.title}</h3><p>{step.description}</p></div><ul>{step.items.map((item) => <li key={item}><MdCheck aria-hidden="true" />{item}</li>)}</ul></div></div>
      </section>

      <section id="about-values" className={`${style.contentSection} ${style.divided}`} data-reveal aria-labelledby="about-values-heading">
        <div className={style.sectionTitle}><span className={style.eyebrow}>03 / MY APPROACH</span><div><h2 id="about-values-heading">The details I pay attention to.</h2><p>The quality of a product comes from decisions made across the interface, codebase, and complete user journey.</p></div></div>
        <div className={style.valueGrid}>{values.map(({ Icon, title, description }) => <article key={title} className={style.value}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className={style.approach}><article><h3>Design and development belong together.</h3><p>I consider how an interface will behave while building it, from its visual hierarchy to its smallest transition.</p></article><article><h3>The whole experience matters.</h3><p>A working feature includes the frontend, the API, the data, and what happens when something doesn't go to plan.</p></article></div>
      </section>

      <section className={style.closing} data-reveal aria-labelledby="about-contact-heading"><div><h2 id="about-contact-heading">Have something you'd like to build?</h2><p>Let's talk about the idea, the requirements, and where to start.</p></div><button type="button" onClick={startConversation}>Start a conversation <MdArrowOutward aria-hidden="true" /></button></section>
    </main>
  );
};
