import { useEffect, useRef, useState } from 'react';
import { FileText, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import About from '../components/About';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import EducationCard from '../components/EducationCard';
import Footer from '../components/Footer';
import NotFound from './NotFound';
import {
    achievements,
    blogs,
    certifications,
    education,
    experience,
    hireOptions,
    personalInfo,
    projects,
    services,
    skills,
} from '../data/portfolioData';

const VALID_SECTIONS = new Set(['about', 'skills', 'services', 'projects', 'experience', 'blogs', 'hire', 'contact']);

const Home = ({ initialSection }) => {
    const mainRef = useRef(null);
    const [hashSection, setHashSection] = useState(() => {
        const sectionId = window.location.hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '');
        return sectionId || '';
    });

    const isInvalidHash = Boolean(hashSection) && !VALID_SECTIONS.has(hashSection);

    const handleBackHome = () => {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
        setHashSection('');
    };

    // Scroll reveal observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        );
        const els = mainRef.current?.querySelectorAll('.reveal');
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const updateHashSection = () => {
            const sectionId = window.location.hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '');
            setHashSection(sectionId || '');
        };

        updateHashSection();
        window.addEventListener('hashchange', updateHashSection);

        return () => window.removeEventListener('hashchange', updateHashSection);
    }, []);

    // Support both path-based section routes (/contact) and hash anchors (#contact).
    useEffect(() => {
        const scrollToSection = (sectionId) => {
            if (!sectionId) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return null;
            }

            const section = document.getElementById(sectionId);
            if (!section) return null;

            return window.setTimeout(() => {
                const navOffset = 76;
                const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
                window.scrollTo({ top, behavior: 'smooth' });
            }, 80);
        };

        if (isInvalidHash) {
            return undefined;
        }

        let timer = scrollToSection(initialSection || hashSection);

        const onHashChange = () => {
            if (timer) {
                window.clearTimeout(timer);
            }
            const nextSection = window.location.hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '');
            if (!nextSection || VALID_SECTIONS.has(nextSection)) {
                timer = scrollToSection(nextSection);
            }
        };

        window.addEventListener('hashchange', onHashChange);

        return () => {
            if (timer) {
                window.clearTimeout(timer);
            }
            window.removeEventListener('hashchange', onHashChange);
        };
    }, [hashSection, initialSection, isInvalidHash]);

    if (isInvalidHash) {
        return <NotFound onBackHome={handleBackHome} />;
    }

    return (
        <div ref={mainRef} style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
            <Navbar />

            <main>
                <Hero />

                {/* About */}
                <section id="about" className="reveal" style={{ maxWidth: 1120, margin: '0 auto', padding: 'clamp(56px, 10vw, 80px) 20px' }}>
                    <div className="section-divider" style={{ marginBottom: 80 }} />
                    <SectionHeader label="About" title="Professional Summary" subtitle="Full-Stack Developer passionate about building scalable systems and open source." />
                    <About />
                </section>

                {/* Skills */}
                <section id="skills" className="reveal" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 20px clamp(56px, 10vw, 80px)' }}>
                    <div className="section-divider" style={{ marginBottom: 80 }} />
                    <SectionHeader label="Tech Stack" title="Skills & Technologies" subtitle="Tools and technologies I use to build production-grade applications." />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
                        {skills.map((skill) => (
                            <SkillCard key={skill.id} skill={skill} />
                        ))}
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="reveal" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 20px clamp(56px, 10vw, 80px)' }}>
                    <div className="section-divider" style={{ marginBottom: 80 }} />
                    <SectionHeader label="Services" title="What I Can Build" subtitle="Freelance-ready services based on my full-stack, backend, database, and security experience." />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14 }}>
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <article key={service.id} className="card" style={{ padding: 'clamp(20px, 4.5vw, 28px)', display: 'flex', flexDirection: 'column', minHeight: 250 }}>
                                    <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)', marginBottom: 18 }}>
                                        <Icon size={17} />
                                    </div>
                                    <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>
                                        {service.title}
                                    </h3>
                                    <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: 18 }}>
                                        {service.summary}
                                    </p>
                                    <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                        {service.skills.map((skill) => (
                                            <span key={skill} className="tech-tag">{skill}</span>
                                        ))}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="reveal" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 20px clamp(56px, 10vw, 80px)' }}>
                    <div className="section-divider" style={{ marginBottom: 80 }} />
                    <SectionHeader label="Projects" title="Selected Works" subtitle="Production-deployed applications and open-source tools." />
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 16 }}>
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>

                {/* Experience + Education */}
                <section id="experience" className="reveal" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 20px clamp(56px, 10vw, 80px)' }}>
                    <div className="section-divider" style={{ marginBottom: 80 }} />
                    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]" style={{ gap: 64 }}>
                        <div>
                            <SectionHeader label="Career" title="Experience" subtitle="Open source leadership and industry internship." />
                            <ExperienceTimeline experience={experience} />
                        </div>
                        <div>
                            <SectionHeader label="Credentials" title="Education & Certs" />
                            <EducationCard
                                education={education}
                                certifications={certifications}
                                achievements={achievements}
                            />
                        </div>
                    </div>
                </section>

                {/* Blogs */}
                <section id="blogs" className="reveal" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 20px clamp(56px, 10vw, 80px)' }}>
                    <div className="section-divider" style={{ marginBottom: 80 }} />
                    <SectionHeader label="Blogs" title="Technical Writing" subtitle="Engineering notes and project write-ups from my open-source, full-stack, and security work." />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
                        {blogs.map((blog) => (
                            <a key={blog.id} href={blog.href} target={blog.href.startsWith('mailto:') ? undefined : '_blank'} rel={blog.href.startsWith('mailto:') ? undefined : 'noreferrer'} className="card" style={{ padding: 'clamp(20px, 4.5vw, 28px)', display: 'flex', flexDirection: 'column', minHeight: 250 }}>
                                <span className="badge badge-neutral" style={{ alignSelf: 'flex-start', marginBottom: 16, fontSize: 11 }}>{blog.category}</span>
                                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, lineHeight: 1.3 }}>
                                    {blog.title}
                                </h3>
                                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: 18 }}>
                                    {blog.excerpt}
                                </p>
                                <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {blog.topics.map((topic) => (
                                        <span key={topic} className="tech-tag">{topic}</span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Hire */}
                <section id="hire" className="reveal" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 20px clamp(56px, 10vw, 96px)' }}>
                    <div className="section-divider" style={{ marginBottom: 80 }} />
                    <div className="card-featured" style={{ padding: 'clamp(24px, 6vw, 44px)' }}>
                        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr]" style={{ gap: 32, alignItems: 'center' }}>
                            <div>
                                <span className="badge badge-green" style={{ marginBottom: 16, fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                                    Hire Me
                                </span>
                                <h2 style={{ fontSize: 'clamp(26px, 6vw, 38px)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: 14, lineHeight: 1.15 }}>
                                    Available for freelance, internships, and remote software work.
                                </h2>
                                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 24 }}>
                                    I can help teams ship full-stack features, backend APIs, database-driven apps, UI implementations, and secure product workflows.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                    <a href={personalInfo.social.email} className="btn btn-primary"><Mail size={15} /> Hire Me</a>
                                    <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn btn-secondary"><FileText size={15} /> View Resume</a>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 12 }}>
                                {hireOptions.map((option) => {
                                    const Icon = option.icon;
                                    return (
                                        <div key={option.id} style={{ padding: 18, border: '1px solid var(--border)', borderRadius: 8, background: 'rgba(255,255,255,0.03)' }}>
                                            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)', marginBottom: 12 }}>
                                                <Icon size={15} />
                                            </div>
                                            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{option.title}</h3>
                                            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{option.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
