import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  LockKeyhole,
} from "lucide-react";
import "./styles.css";
import { projects } from "./requirments/projects";
import { skills } from "./requirments/skills";

function App() {
  const [menu, setMenu] = useState(false);
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };
  return <div className="app">
    <nav className="nav">
      <div className="navin">
        <button className="brand" onClick={() => go("home")}>
          LP<span>.</span>
        </button>
        <div className={"links " + (menu ? "open" : "")}>
          {["about", "skills", "experience", "projects", "contact"].map((x) => (
            <button key={x} onClick={() => go(x)}>
              {x[0].toUpperCase() + x.slice(1)}
            </button>
          ))}
        </div>
        <div className="navactions">
          <a
            href="https://github.com/lakshmipriyaks31-art"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/kslp31"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} />
          </a>
          
          <button className="menub" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
    <main>
      <section id="home" className="hero section">
        <div>
          <p className="eyebrow">SENIOR SOFTWARE DEVELOPER</p>
          <h1>
            Lakshmi Priya <em>KS</em>
          </h1>
          <h3>Senior Software Developer · MERN · Node.js · React.js</h3>
          <p className="lead">
            4.7+ years building full-stack applications, scalable REST APIs,
            reusable platforms and production applications.
          </p>
          <div className="buttons">
            <button className="primary" onClick={() => go("projects")}>
              View My Work <ArrowUpRight size={17} />
            </button>
            <a className="secondary" href="mailto:lakshmipriya.ks.31@gmail.com">
              Contact Me <Mail size={17} />
            </a>
          </div>
          <div className="social">
            <a
              href="https://github.com/lakshmipriyaks31-art"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kslp31"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="terminal">
          <div className="dots">
            <i />
            <i />
            <i />
          </div>
          <pre>
            {`const developer = {\n  experience: "4.7+ years",\n  focus: ["MERN", "Node.js", "React.js"],\n  leadership: "8–10 developers",\n  clients: "10+ implementations",\n  approach: "build · optimize · deliver"\n};`}
          </pre>
        </div>
      </section>
      <section className="stats">
        {[
          ["4.7+", "Years Experience"],
          ["Upto 10", "Developers Led"],
          ["13+", "Projects Delivered"],
          ["35%", "API Latency Reduction"],
        ].map(([n, l]) => (
          <div className="stat" key={l}>
            <strong>{n}</strong>
            <span>{l}</span>
          </div>
        ))}
      </section>
      <section id="about" className="section">
        <div className="label">01 / ABOUT</div>
        <div className="twocol">
          <h2>
            Building products that are{" "}
            <em>useful, scalable and maintainable.</em>
          </h2>
          <div className="copy">
            <p>
             Senior Software Developer with 4.7+ years of experience in 
             full-stack JavaScript development (MERN),specializing in React.js, 
             React Native, Node.js, Express.js, and MongoDB.
            </p>
            <p>
              Delivered 13+ applications across NFT, crypto wallet, 
              food delivery, and real-time taxi booking domains. 
              Skilled in REST APIs, JWT, RBAC, MongoDB optimization, 
              testing, CI/CD, Web3, and client collaboration. 
              development teams of up to 10 developers across multi-client applications. 
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="section muted">
        <div className="label">02 / SKILLS</div>
        <div className="skillgrid">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k}>
              <h3>{k}</h3>
              <div className="chips">
                {v.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="experience" className="section">
        <div className="label">03 / EXPERIENCE</div>
        <div className="exp">
          <div className="dot" />
          <div>
            <div className="exphead">
              <div>
                <h2>Senior Software Developer</h2>
                <h3>Maticz Technologies Pvt. Ltd.</h3>
              </div>
              <span>Jan 2021 – Sep 2025</span>
            </div>
            <ul>
              <li>
              Built scalable MERN applications using JavaScript, React.js, Node.js, Express.js, and MongoDB across taxi booking, food delivery, decentralized wallet, and NFT marketplace solutions for multiple client implementations and delivered 13+ projects.
              </li>
              <li>
                Developed REST APIs with JWT authentication and RBAC for user, driver, product, order, payment, transaction, NFT, and blockchain workflows.
              </li>
              <li>
                Built and enhanced React.js and React Native applications, including user/driver apps and Admin panels with real-time location tracking, route mapping, ride management, notifications, in-app chat, payments, and role-based workflows.
              </li>
              <li>
Developed Web3 applications with wallet creation, blockchain integration, NFT minting, buying, selling, renting, staking, cryptocurrency transactions, and smart-contract integration using React.js/Web3.

              </li>
              <li>
             Optimized MongoDB queries using compound indexes, aggregation pipelines, and query analysis, reducing API latency by ~35% (~1 sec to ~650 ms).
              </li>
               <li>
           Improved frontend performance using reusable components, lazy loading, and code splitting, reducing code duplication by 40%, bundle size by ~25–33%, and page-load time by up to 50%.
   </li>
               <li>
           Led development teams of up to 10 developers, coordinating task allocation, technical implementation, code quality, and Agile/Scrum delivery.   </li>
               <li>
          Handled client calls, requirement analysis, feature discussions, demos, and feedback coordination across multiple implementations.
    </li>
                <li>
       Developed automated unit and API tests using Jest and Supertest and supported CI/CD workflows and production deployments.
    </li>
            </ul>
          </div>
        </div>
        <div className="exp trainee">
          <div className="dot" />
          <div className="exphead">
            <div>
              <h2>React Native Developer Trainee</h2>
              <h3>Dot Com Infoway Pvt. Ltd.</h3>
            </div>
            <span>Oct 2020 – Nov 2020</span>
          </div>
           <ul>
              <li>
               Trained in React Native development, built UI components and basic features, performed testing, and gained hands-on exposure to mobile application development workflows.
             </li>
            </ul>
        </div>
      </section>
      <section id="projects" className="section muted">
        <div className="label">04 / SELECTED WORK</div>
        <div className="projects">
          {projects.map((p, i) => (
            <article className="project" key={p.title}>
              <div className="num">0{i + 1}</div>
              <div className="pt">
                <div className="phead">
                  <div>
                    <p>{p.role}</p>
                    <h2>{p.title}</h2>
                    <span>{p.subtitle}</span>
                  </div>
                  <LockKeyhole size={18} />
                </div>
                <div className="chips">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <ul>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {p.metrics && (
                  <div className="metrics">
                    {p.metrics.map(([a, b, c]) => (
                      <div key={a}>
                        <small>{a}</small>
                        <strong>{b}</strong>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="foot">
                  <span>
                    <LockKeyhole size={13} />
                    Client project · Public demo unavailable
                  </span>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer">
                      Public listing <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="conf">
          <LockKeyhole size={18} />
          <p>
            <strong>Client confidentiality</strong>
            <br />
            Client projects are presented as high-level case studies. Source
            code, screenshots and private demos are not publicly available.
          </p>
        </div>
      </section>
      <section id="contact" className="contact section">
        <div className="label">05 / CONTACT</div>
        <h2>
          Let's build something <em>worth shipping.</em>
        </h2>
        <p>
          Open to Senior Software Developer, MERN, Node.js Backend and Full-Stack JavaScript
          opportunities.
        </p>
        <div className="buttons">
          <a className="primary" href="mailto:lakshmipriya.ks.31@gmail.com">
            Email Me <Mail size={17} />
          </a>
          <a
            className="secondary"
            href="https://linkedin.com/in/kslp31"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
    <footer>
      <span>© 2026 Lakshmi Priya KS</span>
      <span>Full-Stack JavaScript · MERN</span>
    </footer>
  </div>
}
createRoot(document.getElementById("root")).render(<App />);
