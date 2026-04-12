import { useEffect, useRef, useState } from 'react';
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
    certifications,
    education,
    experience,
    projects,
    skills,
} from '../data/portfolioData';

const VALID_SECTIONS = new Set(['about', 'skills', 'projects', 'experience', 'contact']);

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
            </main>

            <Footer />
        </div>
    );
};

export default Home;
