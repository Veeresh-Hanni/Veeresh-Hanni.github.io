import { useEffect, useState } from "react";

const ACCENT = "#00C896";
const ACCENT2 = "#FF6B6B";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #080C14;
    --bg2: #0F1623;
    --bg3: #151D2E;
    --border: #1E2D45;
    --text: #D4DBE8;
    --muted: #627087;
    --accent: #00C896;
    --accent2: #FF6B6B;
    --font-display: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.7;
    overflow-x: hidden;
  }

  ::selection { background: var(--accent); color: #000; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

  /* Nav */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.2rem 4rem;
    background: rgba(8,12,20,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;
  }
  .nav.scrolled { border-bottom-color: var(--border); }
  .nav-logo {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--accent);
    text-decoration: none;
    letter-spacing: 0.05em;
  }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
    letter-spacing: 0.05em;
  }
  .nav-links a:hover { color: var(--accent); }

  /* Hero */
  .hero {
    min-height: 100vh;
    display: flex; align-items: center;
    padding: 0 4rem;
    position: relative;
    overflow: hidden;
  }
  .hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.25;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  }
  .hero-glow {
    position: absolute; top: 20%; left: 10%;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-glow2 {
    position: absolute; bottom: 10%; right: 5%;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(255,107,107,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-content { position: relative; max-width: 780px; }
  .hero-tag {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--accent);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.2s;
  }
  .hero-name {
    font-family: var(--font-display);
    font-size: clamp(3.5rem, 7vw, 6rem);
    font-weight: 800;
    line-height: 1.05;
    color: #fff;
    letter-spacing: -0.02em;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.4s;
  }
  .hero-name span { color: var(--accent); }
  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    font-weight: 600;
    color: var(--muted);
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.6s;
  }
  .hero-desc {
    font-size: 1.05rem;
    color: var(--muted);
    max-width: 560px;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.8s;
  }
  .hero-desc strong { color: var(--text); font-weight: 500; }
  .hero-btns {
    display: flex; gap: 1rem; flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 1s;
  }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    background: var(--accent);
    color: #000;
    font-family: var(--font-display);
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: 6px;
    transition: transform 0.2s, box-shadow 0.2s;
    letter-spacing: 0.02em;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,200,150,0.3); }
  .btn-outline {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    background: transparent;
    color: var(--text);
    font-family: var(--font-display);
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid var(--border);
    border-radius: 6px;
    transition: border-color 0.2s, color 0.2s;
  }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); }

  /* Section */
  .section { padding: 6rem 4rem; }
  .section-inner { max-width: 1100px; margin: 0 auto; }
  .section-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--accent);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }
  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
  }
  .section-title span { color: var(--accent); }
  .section-sub {
    color: var(--muted);
    font-size: 1rem;
    max-width: 520px;
    margin-bottom: 3rem;
  }

  /* Fade-in on scroll */
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }

  /* DBDuck Feature */
  .dbduck-card {
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 0;
  }
  .dbduck-left { padding: 3rem; }
  .dbduck-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: rgba(0,200,150,0.1);
    border: 1px solid rgba(0,200,150,0.25);
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 0.72rem;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    letter-spacing: 0.1em;
    margin-bottom: 1.5rem;
  }
  .dbduck-name {
    font-family: var(--font-display);
    font-size: 2.2rem;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
  }
  .dbduck-tagline {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--accent);
    margin-bottom: 1.2rem;
    letter-spacing: 0.05em;
  }
  .dbduck-desc { color: var(--muted); font-size: 0.95rem; line-height: 1.8; margin-bottom: 1.5rem; }
  .db-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
  .db-pill {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    padding: 0.25rem 0.7rem;
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 4px;
    color: var(--muted);
  }
  .dbduck-links { display: flex; gap: 0.75rem; }
  .dbduck-right {
    background: var(--bg3);
    border-left: 1px solid var(--border);
    display: flex; flex-direction: column;
  }
  .code-bar {
    display: flex; align-items: center; gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid var(--border);
  }
  .code-dot { width: 10px; height: 10px; border-radius: 50%; }
  .code-filename {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--muted);
    margin-left: 0.5rem;
  }
  .code-block {
    flex: 1;
    padding: 1.5rem 1.25rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.9;
    overflow: auto;
  }
  .c-comment { color: #445566; }
  .c-keyword { color: #FF6B6B; }
  .c-string { color: #F9C74F; }
  .c-func { color: #00C896; }
  .c-var { color: #A8DAFF; }
  .c-normal { color: #8899AA; }

  /* Projects grid */
  .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem; }
  .project-card {
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.75rem;
    transition: border-color 0.2s, transform 0.2s;
    text-decoration: none;
    display: flex; flex-direction: column;
    position: relative; overflow: hidden;
  }
  .project-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--accent), transparent);
    opacity: 0; transition: opacity 0.2s;
  }
  .project-card:hover { border-color: rgba(0,200,150,0.3); transform: translateY(-3px); }
  .project-card:hover::before { opacity: 1; }
  .project-num {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--accent);
    opacity: 0.5;
    margin-bottom: 1rem;
  }
  .project-name {
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  .project-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.7; flex: 1; margin-bottom: 1.25rem; }
  .project-stack { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem; }
  .stack-tag {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    padding: 0.2rem 0.6rem;
    background: rgba(0,200,150,0.08);
    border: 1px solid rgba(0,200,150,0.15);
    color: var(--accent);
    border-radius: 3px;
  }
  .project-links { display: flex; gap: 1rem; }
  .project-link {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--muted);
    text-decoration: none;
    display: flex; align-items: center; gap: 0.3rem;
    transition: color 0.2s;
  }
  .project-link:hover { color: var(--accent); }

  /* Skills */
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem; }
  .skill-group {
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 1.5rem;
  }
  .skill-group-title {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--accent);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .skill-items { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .skill-item {
    font-size: 0.82rem;
    color: var(--text);
    background: var(--bg3);
    border: 1px solid var(--border);
    padding: 0.3rem 0.75rem;
    border-radius: 5px;
    transition: border-color 0.2s;
  }
  .skill-item:hover { border-color: var(--accent); color: var(--accent); }

  /* Experience */
  .exp-list { display: flex; flex-direction: column; gap: 0; }
  .exp-item {
    display: grid; grid-template-columns: 200px 1fr;
    gap: 0 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--border);
    position: relative;
  }
  .exp-item::before {
    content: '';
    position: absolute;
    left: 200px;
    top: 0; bottom: 0;
    border-left: 1px solid var(--border);
  }
  .exp-date {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--muted);
    padding-top: 0.3rem;
    letter-spacing: 0.05em;
  }
  .exp-content { padding-left: 2rem; }
  .exp-role {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.2rem;
  }
  .exp-company { font-size: 0.88rem; color: var(--accent); margin-bottom: 1rem; }
  .exp-bullets { list-style: none; padding: 0; }
  .exp-bullets li {
    font-size: 0.9rem;
    color: var(--muted);
    padding-left: 1.25rem;
    position: relative;
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
  .exp-bullets li::before { content: '→'; position: absolute; left: 0; color: var(--accent); font-size: 0.75rem; top: 0.2rem; }

  /* Contact */
  .contact-section {
    background: var(--bg2);
    border-top: 1px solid var(--border);
  }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .contact-links { display: flex; flex-direction: column; gap: 0.75rem; }
  .contact-link {
    display: flex; align-items: center; gap: 1rem;
    padding: 1rem 1.25rem;
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 8px;
    text-decoration: none;
    transition: border-color 0.2s;
  }
  .contact-link:hover { border-color: var(--accent); }
  .contact-link-icon { font-size: 1.1rem; }
  .contact-link-text { font-size: 0.88rem; color: var(--muted); }
  .contact-link-text strong { display: block; color: var(--text); font-size: 0.82rem; font-weight: 500; margin-bottom: 0.1rem; }

  /* Footer */
  .footer {
    padding: 1.5rem 4rem;
    border-top: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: center;
  }
  .footer-text { font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted); }
  .footer-accent { color: var(--accent); }

  /* Divider */
  .divider { border: none; border-top: 1px solid var(--border); margin: 0 4rem; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 900px) {
    .nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    .hero { padding: 0 1.5rem; }
    .section { padding: 4rem 1.5rem; }
    .dbduck-card { grid-template-columns: 1fr; }
    .dbduck-right { min-height: 320px; }
    .exp-item { grid-template-columns: 1fr; }
    .exp-item::before { display: none; }
    .exp-content { padding-left: 0; padding-top: 0.5rem; }
    .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
    .footer { padding: 1.5rem; flex-direction: column; gap: 0.5rem; text-align: center; }
    .divider { margin: 0 1.5rem; }
  }
`;

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const useScrollNav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return scrolled;
};

export default function App() {
  useReveal();
  const scrolled = useScrollNav();

  return (
    <>
      <style>{styles}</style>

      {/* NAV */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">vh.me</a>
        <ul className="nav-links">
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#experience">experience</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-content">
          <p className="hero-tag">// full stack developer · open source author</p>
          <h1 className="hero-name">Veeresh<br /><span>Hanni</span></h1>
          <p className="hero-title">Building backends that scale. Writing code that ships.</p>
          <p className="hero-desc">
            Creator of <strong>DBDuck</strong> — an open-source Python library powering a
            single unified API across 6 databases. Passionate about developer tooling,
            clean architecture, and building things that other developers actually use.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View Projects →</a>
            <a href="https://github.com/Veeresh-Hanni" target="_blank" rel="noreferrer" className="btn-outline">GitHub ↗</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* FEATURED — DBDUCK */}
      <section className="section" id="about">
        <div className="section-inner">
          <p className="section-label reveal">// featured project</p>
          <h2 className="section-title reveal">Open Source<span>.</span></h2>
          <p className="section-sub reveal">Built from scratch, deployed to production, used by developers.</p>
          <div className="dbduck-card reveal">
            <div className="dbduck-left">
              <div className="dbduck-badge">⬡ Open Source · Python</div>
              <h3 className="dbduck-name">DBDuck</h3>
              <p className="dbduck-tagline">"Abstract the database, not the developer."</p>
              <p className="dbduck-desc">
                A Universal Data Object Model (UDOM) for Python — one API to query PostgreSQL,
                MySQL, SQLite, MSSQL, MongoDB, and Neo4j. Switch databases by changing
                a single connection string. Zero rewrites.
              </p>
              <div className="db-pills">
                {['PostgreSQL', 'MySQL', 'SQLite', 'MSSQL', 'MongoDB', 'Neo4j', 'Qdrant'].map(db => (
                  <span key={db} className="db-pill">{db}</span>
                ))}
              </div>
              <div className="dbduck-links">
                <a href="https://github.com/Veeresh-Hanni/DBDuck" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.6rem 1.25rem' }}>GitHub ↗</a>
                <a href="https://dbduck.org.in" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.82rem', padding: '0.6rem 1.25rem' }}>Docs ↗</a>
              </div>
            </div>
            <div className="dbduck-right">
              <div className="code-bar">
                <div className="code-dot" style={{ background: '#FF5F57' }} />
                <div className="code-dot" style={{ background: '#FFBD2E' }} />
                <div className="code-dot" style={{ background: '#28CA41' }} />
                <span className="code-filename">example.py</span>
              </div>
              <div className="code-block">
                <div><span className="c-keyword">from</span> <span className="c-var">dbduck</span> <span className="c-keyword">import</span> <span className="c-func">UDOM</span></div>
                <div>&nbsp;</div>
                <div><span className="c-comment"># Switch databases with ONE line</span></div>
                <div><span className="c-var">db</span> = <span className="c-func">connect</span>(<span className="c-string">"postgresql://user:pass@localhost/db"</span>)</div>
                <div><span className="c-comment"># db = UDOM(url="mongodb://localhost:27017/db")</span></div>
                <div><span className="c-comment"># db = UDOM(url="mysql://user:pass@localhost/db")</span></div>
                <div>&nbsp;</div>
                <div><span className="c-comment"># Unified query API — works on all backends</span></div>
                <div><span className="c-var">users</span> = <span className="c-var">db</span>.<span className="c-func">query</span>(<span className="c-string">"SELECT * FROM users"</span>)</div>
                <div>&nbsp;</div>
                <div><span className="c-comment"># ORM-style models (Django-like)</span></div>
                <div><span className="c-keyword">class</span> <span className="c-func">User</span>(<span className="c-var">db</span>.Model):</div>
                <div>    <span className="c-var">name</span> = <span className="c-var">db</span>.<span className="c-func">CharField</span>()</div>
                <div>    <span className="c-var">email</span> = <span className="c-var">db</span>.<span className="c-func">EmailField</span>()</div>
                <div>&nbsp;</div>
                <div><span className="c-comment"># Zero rewrites when you switch DB</span></div>
                <div><span className="c-var">User</span>.<span className="c-func">objects</span>.<span className="c-func">filter</span>(<span className="c-var">active</span>=<span className="c-keyword">True</span>)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-inner">
          <p className="section-label reveal">// work</p>
          <h2 className="section-title reveal">Projects<span>.</span></h2>
          <p className="section-sub reveal">Things I've designed, built, and shipped.</p>
          <div className="projects-grid">
            {[
              {
                num: '01',
                name: 'Pingone — AI Chat App',
                desc: 'Full-stack AI Chat Application powered by OpenAI GPT. End-to-end AES-256 encrypted messages in MongoDB Atlas, structured user data in PostgreSQL (Supabase), and a clean React frontend.',
                stack: ['React', 'Django', 'MongoDB', 'PostgreSQL', 'OpenAI API', 'Cryptography'],
                live: 'https://pingone.onrender.com',
                github: '#'
              },
              {
                num: '02',
                name: 'Pharmacy Dispensing System',
                desc: 'Full pharmacy drug management system handling 500+ drug records with complete CRUD operations, Django ORM, authentication workflows, and MVC architecture.',
                stack: ['Python', 'Django', 'MySQL', 'HTML/CSS', 'JavaScript'],
                live: null,
                github: '#'
              },
              {
                num: '03',
                name: 'IPO Web Application',
                desc: 'Real-time IPO tracking application built during Bluestock Fintech internship. Contributed full-stack features using React and Django, optimizing API response time by ~20%.',
                stack: ['React.js', 'Django', 'SQL', 'REST APIs'],
                live: null,
                github: null
              }
            ].map((p, i) => (
              <div key={p.num} className={`project-card reveal reveal-delay-${i + 1}`}>
                <div className="project-num">{p.num}</div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
                </div>
                <div className="project-links">
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="project-link">↗ Live</a>}
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="project-link">⌥ GitHub</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-inner">
          <p className="section-label reveal">// toolkit</p>
          <h2 className="section-title reveal">Skills<span>.</span></h2>
          <p className="section-sub reveal">Technologies I work with day to day.</p>
          <div className="skills-grid">
            {[
              { title: 'Languages', items: ['Python', 'JavaScript', 'Java', 'SQL', 'HTML5', 'CSS3'] },
              { title: 'Frameworks', items: ['Django', 'React.js', 'Django REST Framework'] },
              { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'MSSQL', 'Neo4j'] },
              { title: 'DevOps & Tools', items: ['Git', 'Docker', 'GitHub Actions', 'CI/CD', 'Vercel'] },
              { title: 'APIs & Testing', items: ['REST APIs', 'Postman', 'Django ORM', 'MongoDB Atlas'] },
              { title: 'CS Fundamentals', items: ['DSA', 'OOP', 'DBMS', 'OS', 'Networks', 'Agile'] },
            ].map((g, i) => (
              <div key={g.title} className={`skill-group reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="skill-group-title">{g.title}</div>
                <div className="skill-items">
                  {g.items.map(s => <span key={s} className="skill-item">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-inner">
          <p className="section-label reveal">// history</p>
          <h2 className="section-title reveal">Experience<span>.</span></h2>
          <div className="exp-list">
            {[
              {
                date: 'Apr – May 2025',
                role: 'SDE Intern',
                company: 'Bluestock Fintech · Remote',
                bullets: [
                  'Built 4+ full-stack features for a real-time IPO Web Application using React.js and Django.',
                  'Refactored 3 REST API endpoints, reducing average response time by ~20%.',
                  'Implemented SQL CRUD operations and collaborated in Agile team sprints.',
                ]
              },
              {
                date: 'Jan 2026 – Present',
                role: 'Creator & Maintainer',
                company: 'DBDuck · Open Source',
                bullets: [
                  'Architected and published a Python library providing unified API across 6 databases.',
                  'Identified and resolved 28 SQL injection vulnerabilities through full security audit.',
                  'Built and deployed documentation site (dbduck.org.in) with React, Vercel, and SEO.',
                ]
              },
              {
                date: 'Aug 2022 – Apr 2025',
                role: 'Diploma in CS Engineering',
                company: 'Government Polytechnic, Gadag · CGPA 9.5',
                bullets: [
                  'Graduated with a 9.5 CGPA, top of class in Computer Science.',
                  'Led a 4-member team across multiple project deliveries.',
                  'HackerRank Gold Badges in Python and SQL.',
                ]
              }
            ].map((e, i) => (
              <div key={i} className={`exp-item reveal reveal-delay-${i + 1}`}>
                <div className="exp-date">{e.date}</div>
                <div className="exp-content">
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  <ul className="exp-bullets">
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div>
              <p className="section-label reveal">// say hello</p>
              <h2 className="section-title reveal">Let's Work<br /><span>Together</span></h2>
              <p className="section-sub reveal" style={{ marginBottom: 0 }}>
                Open to Full Stack Developer, SDE, and Backend Developer roles.
                Also happy to collaborate on open-source projects.
              </p>
            </div>
            <div className="contact-links">
              {[
                { icon: '✉', label: 'Email', value: 'veereshhanni347@gmail.com', href: 'mailto:veereshhanni347@gmail.com' },
                { icon: '⌥', label: 'GitHub', value: 'github.com/Veeresh-Hanni', href: 'https://github.com/Veeresh-Hanni' },
                { icon: '◈', label: 'LinkedIn', value: 'linkedin.com/in/veeresh-hanni', href: 'https://linkedin.com/in/veeresh-hanni-9775ba33b' },
                { icon: '⬡', label: 'DBDuck', value: 'dbduck.org.in', href: 'https://dbduck.org.in' },
              ].map((c, i) => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className={`contact-link reveal reveal-delay-${i + 1}`}>
                  <span className="contact-link-icon">{c.icon}</span>
                  <div className="contact-link-text">
                    <strong>{c.label}</strong>
                    {c.value}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-text">© 2026 <span className="footer-accent">Veeresh Hanni</span> · Built with ❤️👨‍💻</span>
        <span className="footer-text">Gadag, Karnataka, India 🇮🇳</span>
      </footer>
    </>
  );
}