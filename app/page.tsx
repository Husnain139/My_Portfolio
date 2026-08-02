const projects = [
  {
    title: "AI Agent Studio",
    summary: "Multi-model agents with live web research and zero-downtime routing.",
    stack: "LangGraph · FastAPI · OpenAI · Groq",
    href: "https://github.com/Husnain139/Agentic-AI-Studio",
    tone: "lime",
  },
  {
    title: "Reels Outreach Dashboard",
    summary: "Automated creator research that turns 7 minutes of manual work into seconds.",
    stack: "Python · FastAPI · Groq · yt-dlp",
    href: "#contact",
    tone: "orange",
  },
  {
    title: "AirWave",
    summary: "An agentic newsroom pipeline from web research to generated audio.",
    stack: "LangChain · MCP · ElevenLabs",
    href: "https://github.com/Husnain139/Agentic_AI_Researcher",
    tone: "cream",
  },
  {
    title: "DeepSeek LoRA",
    summary: "Parameter-efficient fine-tuning for domain-specific language generation.",
    stack: "Hugging Face · PEFT · NLP",
    href: "https://github.com/Husnain139/AI_Model_finetune_Deepseekr1",
    tone: "blue",
  },
  {
    title: "Agentic RAG Chatbot",
    summary: "Multi-step orchestration for intelligent counseling and emergency support.",
    stack: "LangGraph · Gemini · FastAPI",
    href: "#contact",
    tone: "violet",
  },
  {
    title: "Vision + Voice AI",
    summary: "Multimodal medical Q&A with image understanding, speech, and voice output.",
    stack: "Whisper · Streamlit · CV",
    href: "https://github.com/Husnain139/Healthcare_MultiModel-Chatbot",
    tone: "pink",
  },
];

const roles = [
  {
    role: "AI Engineer",
    company: "Journal Post Group",
    period: "May 2026 — Present",
    detail:
      "Shipping LLM automation and RAG workflows that cut manual effort by 40% and reduce inference latency by about 30%.",
  },
  {
    role: "AI/ML Intern",
    company: "Samsung Innovation Campus · Knowledge Stream",
    period: "Jan 2026 — May 2026",
    detail:
      "Built end-to-end ML projects, from data preparation to deployment, with a 15%+ improvement in predictive accuracy.",
  },
  {
    role: "AI/ML Intern",
    company: "Cross Media Sol",
    period: "Jun 2025 — Sep 2025",
    detail:
      "Trained production-focused ML/DL models and improved inference speed by roughly 20% through systematic tuning.",
  },
  {
    role: "MERN Stack Intern",
    company: "Buggy",
    period: "Aug 2024 — Nov 2024",
    detail:
      "Built REST APIs and responsive React interfaces with the core engineering team.",
  },
];

const skills = [
  "LangChain",
  "LangGraph",
  "FastAPI",
  "OpenAI API",
  "RAG",
  "Python",
  "PyTorch",
  "TensorFlow",
  "Hugging Face",
  "Docker",
  "AWS",
  "MCP",
];

export default function Home() {
  return (
    <main id="home" className="portfolio">
      <nav className="floating-nav" aria-label="Portfolio sections">
        <a href="#home" aria-label="Home">⌂</a>
        <a href="#work" aria-label="Selected work">⌁</a>
        <a href="#experience" aria-label="Experience">✦</a>
        <a href="#skills" aria-label="Technical skills">⌘</a>
        <a href="#contact" aria-label="Contact">↗</a>
      </nav>

      <div className="portfolio-grid">
        <aside className="profile-rail" aria-label="Profile">
          <div className="profile-card">
            <div className="profile-accent profile-accent-top" aria-hidden="true" />
            <div className="portrait-frame">
              <img src="/hussnain.jpg" alt="Muhammad Hussnain" />
              <span className="portrait-badge" aria-hidden="true">AI</span>
            </div>
            <h1>Muhammad<br />Hussnain</h1>
            <p className="profile-role">AI Engineer building agentic systems that move real work forward.</p>
            <div className="profile-accent profile-accent-bottom" aria-hidden="true" />
            <div className="profile-links" aria-label="Social links">
              <a href="mailto:hussnainshafiq138@gmail.com" aria-label="Email Muhammad Hussnain">@</a>
              <a href="https://www.linkedin.com/in/hussnain-shafiq-b294711a9/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in</a>
              <a href="https://github.com/Husnain139" target="_blank" rel="noreferrer" aria-label="GitHub profile">⌘</a>
              <a href="tel:+923186448059" aria-label="Call Muhammad Hussnain">↗</a>
            </div>
          </div>
        </aside>

        <div className="content-column">
          <section className="hero-section" aria-labelledby="intro-title">
            <p className="eyebrow"><span /> Lahore, Pakistan · Available for AI engineering work</p>
            <h2 id="intro-title" className="hero-title">
              <span>AI</span>
              <span>ENGINEER</span>
            </h2>
            <p className="hero-copy">
              I design dependable AI systems: LLM automation, agentic workflows, and RAG products built to deliver a measurable result—not just a demo.
            </p>

            <div className="stat-row" aria-label="Career highlights">
              <div><strong>1.5+</strong><span>YEARS BUILDING<br />SOFTWARE</span></div>
              <div><strong>12+</strong><span>PROJECTS<br />COMPLETED</span></div>
              <div><strong>3</strong><span>CERTIFICATES<br />EARNED</span></div>
            </div>

            <div className="hero-actions">
              <a className="signal-card signal-orange" href="#experience">
                <span className="signal-icon">✦</span>
                <strong>AGENTIC AI,<br />RAG SYSTEMS,<br />LLM AUTOMATION</strong>
                <span className="arrow">→</span>
              </a>
              <a className="signal-card signal-lime" href="#skills">
                <span className="signal-icon">⌘</span>
                <strong>LANGCHAIN, LANGGRAPH,<br />FASTAPI, OPENAI, MCP</strong>
                <span className="arrow">→</span>
              </a>
            </div>
          </section>

          <section id="work" className="content-section work-section" aria-labelledby="work-title">
            <div className="section-heading">
              <p className="eyebrow"><span /> Selected systems</p>
              <h2 id="work-title">RECENT<br /><em>WORK</em></h2>
              <p>Applied AI projects with a clear job to do, from research automation to multimodal assistance.</p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <a className={`project-card ${project.tone} project-${index + 1}`} key={project.title} href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer" : undefined}>
                  <span className="project-index">0{index + 1}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                  <footer>
                    <span>{project.stack}</span>
                    <b>↗</b>
                  </footer>
                </a>
              ))}
            </div>
          </section>

          <section id="experience" className="content-section experience-section" aria-labelledby="experience-title">
            <div className="section-heading compact">
              <p className="eyebrow"><span /> Timeline</p>
              <h2 id="experience-title">BUILDING<br /><em>IN PRODUCTION</em></h2>
            </div>
            <div className="experience-list">
              {roles.map((item, index) => (
                <article className="experience-item" key={item.role + item.company}>
                  <span className="experience-index">0{index + 1}</span>
                  <div><h3>{item.role}</h3><p>{item.company}</p></div>
                  <p className="experience-detail">{item.detail}</p>
                  <time>{item.period}</time>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="content-section skills-section" aria-labelledby="skills-title">
            <div className="skills-panel">
              <div className="section-heading compact">
                <p className="eyebrow dark"><span /> Core toolkit</p>
                <h2 id="skills-title">TOOLS FOR<br /><em>THINKING MACHINES</em></h2>
              </div>
              <div className="skill-cloud">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
              <p className="skills-note">Also working across NumPy, Pandas, scikit-learn, Whisper, ElevenLabs, JavaScript, SQL, Git, and production deployment workflows.</p>
            </div>
          </section>

          <section className="content-section education-section" aria-labelledby="education-title">
            <p className="eyebrow"><span /> Education</p>
            <div className="education-content">
              <h2 id="education-title">COMSATS<br /><em>UNIVERSITY</em></h2>
              <div><p>Bachelor of Science in Computer Science</p><strong>CGPA 3.7 / 4.0</strong><span>Sahiwal Campus · Feb 2022 — Jan 2026</span></div>
              <div className="training"><p>Samsung Innovation Campus</p><span>AI / ML Program · 2026</span></div>
            </div>
          </section>

          <section id="contact" className="contact-section" aria-labelledby="contact-title">
            <p className="eyebrow"><span /> Start a conversation</p>
            <h2 id="contact-title">LET&apos;S BUILD<br /><em>WHAT&apos;S NEXT.</em></h2>
            <p>I&apos;m open to AI engineering roles and thoughtful collaborations around agentic AI, LLM systems, and automation.</p>
            <a className="contact-link" href="mailto:hussnainshafiq138@gmail.com">hussnainshafiq138@gmail.com <b>↗</b></a>
          </section>

          <footer className="site-footer">
            <span>© 2026 Muhammad Hussnain</span>
            <span>AI Engineer · Lahore, Pakistan</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
