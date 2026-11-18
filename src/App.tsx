import React, { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, BrainCircuit, Database, Cloud, Terminal, Sparkles, ExternalLink,
  GraduationCap, MapPin, Cpu, Layers3, Zap
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "AI-Powered Mock Interview",
    type: "AI PRODUCT · WEB APPLICATION",
    description: "A mock interview platform that generates role-specific technical and behavioral questions, evaluates responses, and provides personalized feedback.",
    stack: ["React", "TypeScript", "Firebase", "Gemini AI", "Clerk", "Shadcn UI"],
    accent: "violet",
    visual: "interview",
    points: ["Dynamic question generation with Gemini AI", "Interview history and session data with Firestore", "Responsive dashboard for role, domain and difficulty"]
  },
  {
    number: "02",
    name: "PATHIQ Walk",
    type: "COMPUTER VISION · ACCESSIBILITY",
    description: "An AI-powered walking assistant designed to help pedestrians navigate more safely through real-time obstacle awareness and voice guidance.",
    stack: ["React Native", "Expo", "Python", "YOLO", "OpenCV", "FastAPI"],
    accent: "mint",
    visual: "path",
    points: ["Detects pedestrians, vehicles, potholes and stairs", "Depth estimation and walkable-area segmentation", "Voice instructions, vibration alerts and hazard mapping"]
  },
  {
    number: "03",
    name: "Smart Campus Energy Prediction",
    type: "MACHINE LEARNING · GENAI",
    description: "An energy intelligence system that predicts campus consumption, surfaces anomalies, and provides data-driven sustainability recommendations.",
    stack: ["Python", "FastAPI", "Scikit-learn", "Streamlit", "RAG", "FAISS", "AWS"],
    accent: "blue",
    visual: "energy",
    points: ["Random Forest energy-consumption prediction", "Isolation Forest and rule-based anomaly detection", "Gemini-powered RAG assistant for campus energy queries"]
  }
];

const skillGroups = [
  { title: "Programming", icon: Code2, skills: ["Java", "Python", "JavaScript", "TypeScript"] },
  { title: "Frontend & Backend", icon: Layers3, skills: ["HTML", "CSS", "React.js", "Node.js", "FastAPI"] },
  { title: "Data & Databases", icon: Database, skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore"] },
  { title: "AI & Intelligent Systems", icon: BrainCircuit, skills: ["Gemini AI", "RAG", "FAISS", "Scikit-learn", "YOLO", "OpenCV"] },
  { title: "Cloud & Tools", icon: Cloud, skills: ["AWS", "Microsoft Azure", "Docker", "Git", "GitHub"] },
  { title: "Developer Workflow", icon: Terminal, skills: ["VS Code", "Figma", "Eclipse", "Jupyter Notebook"] }
];

const navItems = ["About", "Skills", "Projects", "Journey", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "journey", "contact"];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id === "home" ? "Home" : entry.target.id[0].toUpperCase() + entry.target.id.slice(1));
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Dhanya home">
          <span className="brand-mark">D<span>.</span></span>
          <span className="brand-name">DHANYA SURESH</span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(item => <a key={item} className={active === item ? "nav-link active" : "nav-link"} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="mailto:dhanyaharikant777@gmail.com">Let's talk <ArrowUpRight size={14}/></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> INFORMATION SCIENCE ENGINEERING STUDENT</div>
            <h1>Learning, building<br/>and exploring <span className="gradient-text">technology</span><span className="period">.</span></h1>
            <p className="hero-intro">I'm <strong>Dhanya Suresh Harikant</strong>, an Information Science engineering student who enjoys learning new technologies and creating projects using web development, Python, and AI.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="mailto:dhanyaharikant777@gmail.com">Get in touch <Mail size={16}/></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ExternalLink size={11}/></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ExternalLink size={11}/></a>
              <span className="social-divider"/>
              <span className="mono muted">BENGALURU, INDIA</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract technology illustration">
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
            <div className="core-card">
              <div className="core-top"><span className="core-label">CURRENT FOCUS</span><span className="live-pulse"/></div>
              <div className="core-icon"><BrainCircuit size={43} strokeWidth={1.2}/></div>
              <div className="core-title">Curiosity → Creation</div>
              <div className="core-sub">AI · SOFTWARE · IMPACT</div>
              <div className="core-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
            </div>
            <div className="float-chip chip-code"><Code2 size={15}/> <span>Clean code</span></div>
            <div className="float-chip chip-ai"><Sparkles size={15}/> <span>Applied AI</span></div>
            <div className="float-chip chip-api"><Zap size={15}/> <span>Build · Learn · Ship</span></div>
            <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><span className="section-line"/></div>
          <div className="about-grid">
            <div>
              <p className="kicker">A LITTLE ABOUT ME</p>
              <h2>A student who loves<br/><span className="gradient-text">learning by building.</span></h2>
            </div>
            <div className="about-text">
              <p>I'm currently pursuing my B.E. in Information Science and Engineering at CMR Institute of Technology, Bengaluru. I like exploring programming, web development, and how AI can be used in everyday applications.</p>
              <p>I've worked on college and personal projects that helped me learn React, Python, databases, machine learning, and API development. I'm still learning, improving my skills, and looking forward to trying new things.</p>
              <div className="about-meta">
                <div><GraduationCap size={17}/><span>BE · Information Science & Engineering</span></div>
                <div><MapPin size={17}/><span>Bengaluru, Karnataka, India</span></div>
              </div>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-card"><span className="stat-value">8.19</span><span className="stat-label">CURRENT CGPA</span><span className="stat-note">Academic journey</span></div>
            <div className="stat-card"><span className="stat-value">2027</span><span className="stat-label">GRADUATION</span><span className="stat-note">B.E. · CMRIT</span></div>
            <div className="stat-card"><span className="stat-value">03</span><span className="stat-label">FEATURED PROJECTS</span><span className="stat-note">AI · ML · Software</span></div>
            <div className="stat-card"><span className="stat-value">∞</span><span className="stat-label">LEARNING MODE</span><span className="stat-note">Always exploring</span></div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading"><span className="section-index">02 / TOOLKIT</span><span className="section-line"/></div>
          <div className="section-title-row"><div><p className="kicker">WHAT I WORK WITH</p><h2>My technical <span className="gradient-text">toolkit.</span></h2></div><p className="section-aside">A growing set of tools and technologies I use to turn ideas into practical solutions.</p></div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><span className="mono skill-number">0{index + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>;
            })}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading"><span className="section-index">03 / SELECTED WORK</span><span className="section-line"/></div>
          <div className="section-title-row"><div><p className="kicker">THINGS I'VE BUILT</p><h2>Ideas made <span className="gradient-text">real.</span></h2></div><p className="section-aside">A selection of projects where I explored AI, machine learning, full-stack development, and real-world problem solving.</p></div>
          <div className="projects-list">
            {projects.map(project => <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-main">
                <div className="project-info">
                  <div className="project-meta"><span className="mono">{project.number}</span><span className="project-meta-line"/><span>{project.type}</span></div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-points">{project.points.map(point => <li key={point}>{point}</li>)}</ul>
                  <div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className={`project-visual ${project.visual}`}>
                  {project.visual === "interview" && <><div className="visual-window"><div className="window-dots"><i/><i/><i/></div><div className="interview-heading">Interview session <span>● LIVE</span></div><div className="interview-question">Tell me about a challenging project you've worked on.</div><div className="answer-lines"><i/><i/><i/></div><div className="feedback-row"><span>AI feedback</span><strong>Strong response ↗</strong></div><div className="score-line"><i/></div></div><span className="visual-orb"/></>}
                  {project.visual === "path" && <><div className="path-grid"/><div className="path-route"><span className="route-point start"/><span className="route-point end"/><i className="route-warning">!</i></div><div className="path-label label-safe">SAFE PATH <strong>92%</strong></div><div className="path-label label-alert">OBSTACLE <strong>3.4m</strong></div><div className="path-scan"><Cpu size={22}/><span>VISION ACTIVE</span></div></>}
                  {project.visual === "energy" && <><div className="energy-head"><span>ENERGY OVERVIEW</span><span className="energy-live">● LIVE DATA</span></div><div className="energy-number">2,840 <small>kWh</small></div><div className="energy-caption">Predicted consumption</div><div className="energy-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="energy-foot"><span>MON</span><span>WED</span><span>FRI</span><span>SUN</span></div><div className="energy-insight"><Zap size={14}/> Optimization insight generated</div></>}
                </div>
              </div>
            </article>)}
          </div>
        </section>

        <section className="section-wrap journey-section" id="journey">
          <div className="section-heading"><span className="section-index">04 / THE JOURNEY</span><span className="section-line"/></div>
          <div className="section-title-row"><div><p className="kicker">EDUCATION & GROWTH</p><h2>Where I'm <span className="gradient-text">headed.</span></h2></div><p className="section-aside">Learning, experimenting, and building a stronger foundation every step of the way.</p></div>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-dot active-dot"/><div className="timeline-date">2024 — 2027 · PURSUING</div><h3>Bachelor of Engineering</h3><p className="timeline-place">CMR Institute of Technology · Bengaluru</p><p className="timeline-desc">Information Science and Engineering · CGPA 8.19</p></div>
            <div className="timeline-item"><span className="timeline-dot"/><div className="timeline-date">2021 — 2024 · COMPLETED</div><h3>Diploma in Computer Science</h3><p className="timeline-place">Shree Vidyadhiraj Polytechnic · Kumta</p><p className="timeline-desc">Computer Science and Engineering · 89%</p></div>
            <div className="timeline-item"><span className="timeline-dot"/><div className="timeline-date">CERTIFICATIONS & ACTIVITIES</div><h3>Always learning beyond class</h3><p className="timeline-place">EY · Microsoft · Infosys Springboard · Great Learning</p><p className="timeline-desc">AI Skills Passport, Python Foundation, SQL Server Important Concepts, and Java Programming. Participated in internal SIH 2025 and a Full Stack Development hackathon.</p></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-glow"/>
          <div className="section-heading"><span className="section-index">05 / GET IN TOUCH</span><span className="section-line"/></div>
          <p className="kicker">HAVE AN IDEA OR OPPORTUNITY?</p>
          <h2>Let's build something<br/><span className="gradient-text">meaningful.</span></h2>
          <p className="contact-copy">I'm open to connecting about software engineering opportunities, AI projects, collaborations, and new ideas.</p>
          <a className="button button-primary contact-button" href="mailto:dhanyaharikant777@gmail.com">Say hello <ArrowUpRight size={18}/></a>
          <div className="contact-details">
            <a href="mailto:dhanyaharikant777@gmail.com"><Mail size={16}/> dhanyaharikant777@gmail.com</a>
            <div className="contact-social"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/></a><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/></a></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">D<span>.</span></span></a><span>MADE BY DHANYA</span><span>© {year} DHANYA SURESH HARIKANT</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

export default App;
