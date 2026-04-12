import { Mail, Github, MapPin, ArrowDownRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
    return (
        <section id="hero" style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            {/* Background glow */}
            <div className="hero-glow" />
            
            {/* Dot grid overlay */}
            <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent)', WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent)' }} />

            <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, margin: '0 auto', padding: 'clamp(96px, 18vw, 120px) 20px clamp(56px, 10vw, 80px)', width: '100%' }}>
                {/* Badge */}
                <div className="anim-fade-up anim-d1" style={{ marginBottom: 24 }}>
                    <span className="badge badge-green" style={{ fontFamily: 'var(--font-mono)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                        Open to work
                    </span>
                </div>

                {/* Main heading */}
                <h1 className="anim-fade-up anim-d2" style={{ fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 20 }}>
                    <span className="text-gradient-hero">Full-Stack Developer</span>
                    <br />
                    <span style={{ color: 'var(--text-primary)' }}>&amp; Open Source Author</span>
                </h1>

                {/* Summary */}
                <p className="anim-fade-up anim-d3" style={{ fontSize: 'clamp(15px, 3.8vw, 17px)', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: 580, marginBottom: 32 }}>
                    Creator of <a href="https://dbduck.org.in" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-light)', fontWeight: 600, borderBottom: '1px solid var(--accent-border)' }}>DBDuck</a> — 
                    a unified Python API across 6 databases. Building scalable backend systems 
                    and production-grade web applications.
                </p>

                {/* CTA Buttons */}
                <div className="anim-fade-up anim-d4" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 40 }}>
                    <a href="#contact" className="btn btn-primary">
                        <Mail size={15} /> Get in Touch
                    </a>
                    <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                        <Github size={15} /> GitHub
                    </a>
                </div>

                {/* Stats */}
                <div className="anim-fade-up anim-d5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1, background: 'var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    {personalInfo.stats.map((stat, i) => (
                        <div key={i} style={{ background: 'var(--bg-surface)', padding: '18px 14px', textAlign: 'center' }}>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(20px, 5vw, 24px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                                {stat.value}
                            </div>
                            <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 4, lineHeight: 1.5 }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Location */}
                <div className="anim-fade-up anim-d6" style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 24, fontSize: 13, color: 'var(--text-muted)' }}>
                    <MapPin size={13} /> {personalInfo.location}
                </div>
            </div>

            {/* Scroll hint */}
            <div className="mobile-hidden" style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
                <ArrowDownRight size={14} style={{ color: 'var(--text-muted)', animation: 'pulse-dot 2s ease infinite' }} />
            </div>
        </section>
    );
};

export default Hero;
