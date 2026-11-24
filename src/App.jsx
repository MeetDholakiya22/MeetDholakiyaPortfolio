import React, { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2,
  Database, GraduationCap, Mail, MapPin, Menu, Phone, X, Zap,
  Monitor, Layers3, Workflow, Globe
} from "lucide-react";

const skills = [
  { title: "Frontend Development", icon: Monitor, items: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS", "Fluent UI", "React Router", "Responsive UI"] },
  { title: "Dynamics 365 & Power Platform", icon: Layers3, items: ["Dynamics 365 CRM", "Dataverse", "PCF Controls", "Model-Driven Apps", "Power Automate"] },
  { title: "Development & Integration", icon: Database, items: ["REST API Integration", "Reusable Components", "JavaScript Web Resources", "FetchXML", "Forms & Views", "Business Rules"] }
];

const education = [
  { degree: "MCA — Master of Computer Applications", school: "Darshan University", year: "2023–2025", score: "CGPA 7.00" },
  { degree: "BCA — Bachelor of Computer Applications", school: "R.P. Bhalodia, Rajkot", year: "2020–2023", score: "CGPA 6.72" },
  { degree: "Higher Secondary (HSC)", school: "Sarvodaya School, Rajkot", year: "2018–2020", score: "86%" },
  { degree: "Secondary (SSC)", school: "Sarvodaya School, Rajkot", year: "2018", score: "85%" }
];

const navItems = ["Home", "About", "Skills", "Experience", "Education", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">M</span><span>MEET<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="mailto:dholakiyameet2@gmail.com">Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> SOFTWARE DEVELOPER <span className="eyebrow-line"/></div>
            <h1>Hi, I'm <span className="gradient-text">Meet Dholakiya.</span><br/>I build useful<br/><span className="outline-text">digital experiences.</span></h1>
            <p className="hero-description">I’m a Software Developer focused on React.js and Microsoft Dynamics 365, building responsive interfaces, reusable components and connected business solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">Explore my work <ArrowRight size={17}/></a>
              <a className="button button-secondary" href="mailto:dholakiyameet2@gmail.com">Contact me <Mail size={16}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15}/> Rajkot, Gujarat, India</span><span className="meta-divider"/><span><BriefcaseBusiness size={15}/> Software Developer</span></div>
          </div>
          <div className="hero-art" aria-label="Developer code illustration">
            <div className="orb orb-one"/><div className="orb orb-two"/>
            <div className="code-window">
              <div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>meet.dev.jsx</span><span className="window-lock">●</span></div>
              <div className="code-content">
                <div className="code-line"><span className="line-no">01</span><span className="purple">const</span> <span className="cyan">developer</span> = {"{"}</div>
                <div className="code-line indent"><span className="line-no">02</span><span className="orange">name</span>: <span className="green">"Meet Dholakiya"</span>,</div>
                <div className="code-line indent"><span className="line-no">03</span><span className="orange">role</span>: <span className="green">"Software Developer"</span>,</div>
                <div className="code-line indent"><span className="line-no">04</span><span className="orange">focus</span>: [</div>
                <div className="code-line indent2"><span className="line-no">05</span><span className="green">"React.js"</span>,</div>
                <div className="code-line indent2"><span className="line-no">06</span><span className="green">"Dynamics 365"</span></div>
                <div className="code-line indent"><span className="line-no">07</span>],</div>
                <div className="code-line"><span className="line-no">08</span>{"};"}</div>
                <div className="code-line code-comment"><span className="line-no">09</span>// Always learning, always building.</div>
              </div>
              <div className="code-footer"><span><span className="status-dot"/> Available for opportunities</span><span>JSX</span></div>
            </div>
            <div className="float-chip chip-react"><Code2 size={16}/> React.js</div>
            <div className="float-chip chip-d365"><Database size={16}/> Dataverse</div>
            <div className="hero-glow"/>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid">
            <div><h2>Turning ideas into<br/><span className="gradient-text">working solutions.</span></h2></div>
            <div className="about-text">
              <p className="lead">A motivated Software Developer with experience in React.js, JavaScript, Microsoft Dynamics 365 CRM and Dataverse.</p>
              <p>I develop user-friendly frontend experiences using React.js, Fluent UI and TypeScript. My work also includes reusable components, custom PCF controls connected to Dataverse, CRM customization and Power Automate workflows.</p>
              <p>I enjoy learning new technologies and improving the way applications work for the people who use them.</p>
              <div className="about-stats"><div><strong>React.js</strong><span>Frontend focus</span></div><div><strong>Dynamics 365</strong><span>CRM platform</span></div><div><strong>PCF</strong><span>Custom controls</span></div></div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading"><div><div className="section-kicker">02 / WHAT I WORK WITH</div><h2>Technical <span className="gradient-text">toolkit.</span></h2></div><p>Tools and technologies I use to build frontend experiences and business applications.</p></div>
          <div className="skill-grid">
            {skills.map((group, index) => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={21}/></span><span className="card-index">0{index + 1}</span></div><h3>{group.title}</h3><div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>; })}
          </div>
        </section>

        <section className="experience section-wrap section-block" id="experience">
          <div className="section-kicker">03 / PROFESSIONAL JOURNEY</div>
          <div className="section-heading"><h2>Experience & <span className="gradient-text">work.</span></h2><p>Building and customizing business applications with frontend and Microsoft Power Platform technologies.</p></div>
          <article className="experience-card">
            <div className="experience-top"><div><span className="company-label">PROFESSIONAL EXPERIENCE</span><h3>Techeunovate</h3><p className="role">Software Developer · Sales Management System</p></div><div className="date-pill">April 2025</div></div>
            <div className="experience-rule"/>
            <p className="experience-intro">Worked on a live enterprise application using Microsoft Dynamics 365 CRM, contributing to CRM customization, frontend development and process automation.</p>
            <div className="work-points">
              <div><span className="point-icon"><Code2 size={17}/></span><p>Developed frontend user interfaces using React.js, JavaScript, HTML5 and CSS, including reusable components and Fluent UI.</p></div>
              <div><span className="point-icon"><Layers3 size={17}/></span><p>Developed custom React-based PCF controls and connected them with Dataverse to retrieve and display CRM data.</p></div>
              <div><span className="point-icon"><Database size={17}/></span><p>Customized CRM forms, views, entities and business process flows; used Dataverse and FetchXML to retrieve and manage data.</p></div>
              <div><span className="point-icon"><Workflow size={17}/></span><p>Created JavaScript web resources for business logic and validations, and Power Automate flows to automate business processes.</p></div>
            </div>
            <div className="experience-tags"><span>React.js</span><span>Fluent UI</span><span>PCF</span><span>Dataverse</span><span>Power Automate</span><span>FetchXML</span></div>
          </article>
          <p className="small-note">The supplied resume lists Techeunovate — April 2025 and does not specify an end date.</p>
        </section>

        <section className="education section-wrap section-block" id="education">
          <div className="section-kicker">04 / EDUCATION</div>
          <div className="section-heading"><h2>Learning <span className="gradient-text">foundation.</span></h2><p>Academic background and qualifications.</p></div>
          <div className="education-list">
            {education.map((item, i) => <article className="education-item" key={item.degree}><div className="edu-icon"><GraduationCap size={20}/></div><div className="edu-main"><h3>{item.degree}</h3><p>{item.school}</p></div><div className="edu-result"><strong>{item.year}</strong><span>{item.score}</span></div></article>)}
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="contact-panel">
            <div className="section-kicker">05 / GET IN TOUCH</div>
            <h2>Have a project<br/>in <span className="gradient-text">mind?</span></h2>
            <p>I'm always interested in connecting with people, exploring ideas and discussing software development opportunities.</p>
            <a className="button button-primary" href="mailto:dholakiyameet2@gmail.com">Send me an email <ArrowUpRight size={17}/></a>
            <div className="contact-details">
              <a href="mailto:dholakiyameet2@gmail.com"><Mail size={17}/> dholakiyameet2@gmail.com</a>
              <a href="tel:+918758729578"><Phone size={17}/> +91 87587 29578</a>
              <span><MapPin size={17}/> Rajkot, Gujarat, India</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">M</span><span>MEET<span className="brand-dot">.</span></span></a><span>Designed & built by Meet Dholakiya</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
