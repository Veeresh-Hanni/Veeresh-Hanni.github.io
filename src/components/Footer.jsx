import { Mail, Github, Linkedin, ExternalLink, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
    return (
        <footer id="contact" style={{ borderTop: '1px solid var(--border)' }}>
            {/* CTA */}
            <div style={{ maxWidth: 600, margin: '0 auto', padding: 'clamp(56px, 12vw, 80px) 20px', textAlign: 'center' }}>
                <span className="badge badge-accent" style={{ marginBottom: 20, fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    Contact
                </span>
                <h2 style={{ fontSize: 'clamp(28px, 8vw, 36px)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.15 }}>
                    Let's build something<br />
                    <span className="text-gradient-hero">together.</span>
                </h2>
                <p style={{ fontSize: 'clamp(14px, 3.8vw, 15px)', color: 'var(--text-muted)', marginBottom: 28, lineHeight: 1.7 }}>
                    I'm currently looking for full-time Software Engineering roles. 
                    Let me know how I can help your team build scalable systems.
                </p>
                <a href={personalInfo.social.email} className="btn btn-primary">
                    <Mail size={15} /> Say Hello
                </a>
                <p style={{ marginTop: 12, fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', overflowWrap: 'anywhere' }}>
                    {personalInfo.email}
                </p>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: '1px solid var(--border)', padding: '20px 24px' }}>
                <div className="mobile-stack-row mobile-center-text" style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <a href={personalInfo.social.github} target="_blank" rel="noreferrer"
                            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                        ><Github size={17} /></a>
                        <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer"
                            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#0a66c2'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                        ><Linkedin size={17} /></a>
                        <a href={personalInfo.social.dbduck} target="_blank" rel="noreferrer"
                            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-light)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                        ><ExternalLink size={17} /></a>
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        © {new Date().getFullYear()} {personalInfo.name}
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-border)'; e.currentTarget.style.color = 'var(--accent-light)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                    >
                        <ArrowUp size={15} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
