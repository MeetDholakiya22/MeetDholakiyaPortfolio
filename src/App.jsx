import React from "react";
import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Workflow,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
} from "lucide-react";

const groups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Fluent UI",
    ],
  },
  {
    title: "MERN Stack",
    icon: Database,
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "API Integration",
      "CRUD Operations",
    ],
  },
  {
    title: "Dynamics 365 & Power Platform",
    icon: Layers3,
    skills: [
      "Microsoft Dynamics 365 CRM",
      "Microsoft Dataverse",
      "JavaScript Web Resources",
      "Plugins",
      "Custom Workflows",
      "PCF Controls",
      "Power Automate",
      "Business Rules",
    ],
  },
];
const education = [
  [
    "MCA — Master Of Computer Application",
    "Darshan University",
    "2023–2025",
    "CGPA 7.00",
  ],
  [
    "BCA — Bachelors Of Computer Application",
    "R.P. Bhalodia, Rajkot",
    "2020–2023",
    "CGPA 6.72",
  ],
  ["Higher Secondary (HSC)", "Sarvodaya School, Rajkot", "2018–2020", "86%"],
  ["Secondary (SSC)", "Sarvodaya School, Rajkot", "2018", "85%"],
];

export default function App() {
  return (
    <div className="site">
      <header>
        <a className="logo" href="#home">
          MEET<span>.</span>
        </a>
        <nav>
          {[
            "Home",
            "About",
            "Skills",
            "Experience",
            "Education",
            "Contact",
          ].map((n) => (
            <a key={n} href={"#" + n.toLowerCase()}>
              {n}
            </a>
          ))}
        </nav>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="eyebrow">● SOFTWARE DEVELOPER · RAJKOT, INDIA</div>
          <h1>
            Hi, I'm <em>Meet Dholakiya.</em>
          </h1>
          <p className="intro">
            A Software Developer working with React.js, the MERN Stack and
            Microsoft Dynamics 365. I build modern frontend applications,
            reusable components and connected business solutions.
          </p>
          <div className="actions">
            <a className="primary" href="#experience">
              Explore my work ↗
            </a>
            <a className="secondary" href="#contact">
              Contact me <Mail size={16} />
            </a>
          </div>
          <div className="code">
            <div className="code-head">
              ● ● ● <span>meet.dev.js</span>
            </div>
            <pre>{`const developer = {
  name: "Meet Dholakiya",
  role: "Software Developer",
  frontend: ["React.js", "TypeScript"],
  stack: ["MongoDB", "Express", "Node.js"],
  platform: "Dynamics 365"
};`}</pre>
            <div className="code-foot">● Always learning, always building</div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="kicker">ABOUT ME</div>
          <div className="two">
            <h2>
              Turning ideas into
              <br />
              <em>working solutions.</em>
            </h2>
            <div>
              <p className="lead">
                A motivated Software Developer with experience in React.js,
                JavaScript, Microsoft Dynamics 365 CRM and Dataverse, with
                familiarity in the MERN Stack: MongoDB, Express.js, React.js and
                Node.js.
              </p>
              <p>
                I develop modern frontend applications using React.js, Fluent UI
                and TypeScript, and work with MongoDB, Express.js, React.js and
                Node.js. My experience also includes reusable components, custom
                PCF controls connected to Dataverse, CRM customization, plugins,
                custom workflows and Power Automate.
              </p>
              <p>
                I enjoy learning new technologies and improving development
                skills.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="kicker">TECHNICAL SKILLS</div>
          <div className="heading">
            <h2>
              My technical <em>toolkit.</em>
            </h2>
          </div>
          <div className="cards">
            {groups.map((g, i) => {
              const Icon = g.icon;
              return (
                <article className="card" key={g.title}>
                  <div className="card-top">
                    <Icon />
                    <small>0{i + 1}</small>
                  </div>
                  <h3>{g.title}</h3>
                  <div className="tags">
                    {g.skills.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="kicker">PROFESSIONAL JOURNEY</div>
          <div className="heading">
            <h2>
              Experience & <em>work.</em>
            </h2>
          </div>
          <article className="job">
            <div className="job-head">
              <div>
                <small>PROFESSIONAL EXPERIENCE</small>
                <h3>Techeunovate</h3>
                <p>Software Developer · Sales Management System</p>
              </div>
              <span>April 2025 – Present</span>
            </div>
            <hr />
            <p>
              Worked on a live enterprise application using Microsoft Dynamics
              365 CRM.
            </p>
            <div className="points">
              <p>
                <Code2 /> Developed frontend interfaces using React.js,
                JavaScript, HTML5 and CSS; used Fluent UI and created reusable
                React components.
              </p>
              <p>
                <Layers3 /> Developed custom React-based PCF controls and
                connected them with Dataverse to retrieve and display CRM data.
              </p>
              <p>
                <Database /> Customized CRM forms, views, entities and business
                process flows; used Dataverse and FetchXML to retrieve and
                manage business data.
              </p>
              <p>
                <Workflow /> Developed JavaScript web resources for business
                logic and validations, and created Power Automate flows to
                automate business processes.
              </p>
            </div>
            <div className="tags">
              {[
                "React.js",
                "Fluent UI",
                "PCF",
                "Dataverse",
                "FetchXML",
                "Power Automate",
                "Dynamics 365 CRM",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="section" id="education">
          <div className="kicker">EDUCATION</div>
          <div className="heading">
            <h2>
              Education & <em>foundation.</em>
            </h2>
          </div>
          <div className="education">
            {education.map((e) => (
              <article key={e[0]}>
                <GraduationCap />
                <div>
                  <h3>{e[0]}</h3>
                  <p>{e[1]}</p>
                </div>
                <aside>
                  <b>{e[2]}</b>
                  <span>{e[3]}</span>
                </aside>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="kicker">GET IN TOUCH</div>
          <h2>
            Let's build something
            <br />
            <em>meaningful.</em>
          </h2>
          <p>
            I'm interested in connecting with people, exploring ideas and
            discussing software development opportunities.
          </p>
          <div className="contact-info">
            <a href="mailto:dholakiyameet2@gmail.com">
              <Mail /> dholakiyameet2@gmail.com
            </a>
            <a href="tel:+918758729578">
              <Phone /> +91 87587 29578
            </a>
            <span>
              <MapPin /> Rajkot, Gujarat, India
            </span>
          </div>
        </section>
      </main>
      <footer>
        <a className="logo" href="#home">
          MEET<span>.</span>
        </a>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}
