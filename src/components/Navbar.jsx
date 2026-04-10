import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                background: scrolled ? 'rgba(9,9,11,0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                transition: 'all 0.3s ease',
            }}
        >
            <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <a href="#" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 15, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                    VH<span style={{ color: 'var(--accent)' }}>.</span>
                </a>

                {/* Desktop links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="hidden md:flex">
                    {navLinks.map(l => (
                        <a key={l.label} href={l.href}
                            style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-muted)', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                        >{l.label}</a>
                    ))}
                </div>

                {/* Right side */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hidden md:flex">
                    <a href={personalInfo.social.github} target="_blank" rel="noreferrer"
                        style={{ color: 'var(--text-muted)', padding: 6, borderRadius: 6, transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    ><Github size={17} /></a>
                    <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer"
                        style={{ color: 'var(--text-muted)', padding: 6, borderRadius: 6, transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#0a66c2'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    ><Linkedin size={17} /></a>
                    <a href={personalInfo.social.dbduck} target="_blank" rel="noreferrer" className="badge badge-accent" style={{ fontSize: 11, fontWeight: 600, textDecoration: 'none' }}>
                        DBDuck <ExternalLink size={11} />
                    </a>
                </div>

                {/* Mobile menu toggle */}
                <button className="md:hidden" style={{ color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => setOpen(!open)}>
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden" style={{ background: 'rgba(9,9,11,0.97)', borderTop: '1px solid var(--border)', padding: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {navLinks.map(l => (
                            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                                style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 500 }}
                            >{l.label}</a>
                        ))}
                        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                            <a href={personalInfo.social.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}><Github size={18} /></a>
                            <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}><Linkedin size={18} /></a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
