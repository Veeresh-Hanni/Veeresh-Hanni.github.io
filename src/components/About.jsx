import { personalInfo } from '../data/portfolioData';

const About = () => {
    return (
        <div className="card" style={{ padding: '32px 36px' }}>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 28 }}>
                {personalInfo.professionalSummary}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                {[
                    { k: 'Email', v: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { k: 'Phone', v: personalInfo.phone },
                    { k: 'Location', v: personalInfo.location },
                    { k: 'Portfolio', v: personalInfo.portfolio, href: `https://${personalInfo.portfolio}` },
                ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13 }}>
                        <span style={{ fontWeight: 600, color: 'var(--accent-light)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.k}</span>
                        {item.href ? (
                            <a href={item.href} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                            >{item.v}</a>
                        ) : (
                            <span style={{ color: 'var(--text-secondary)' }}>{item.v}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
