import { Github, Globe, Sparkles } from 'lucide-react';

const ProjectCard = ({ project }) => {
    const isFeatured = project.featured;

    return (
        <div className={isFeatured ? 'card-featured' : 'card'} style={{ padding: 'clamp(20px, 4.5vw, 32px)', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, gap: 12, flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                    {/* Featured badge */}
                    {isFeatured && (
                        <span className="badge badge-accent" style={{ marginBottom: 10, fontSize: 11 }}>
                            <Sparkles size={11} /> Featured
                        </span>
                    )}
                    <h3 style={{ fontSize: 'clamp(18px, 4.5vw, 20px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2 }}>
                        {project.title}
                    </h3>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {project.subtitle}
                    </p>
                </div>
                <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
                    {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer"
                            style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: 'all 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-border)'; e.currentTarget.style.color = 'var(--accent-light)'; e.currentTarget.style.background = 'var(--accent-bg)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; }}
                        ><Globe size={15} /></a>
                    )}
                    {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer"
                            style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: 'all 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'var(--bg-elevated)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; }}
                        ><Github size={15} /></a>
                    )}
                </div>
            </div>

            {/* Role & Period */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
                <span className="badge badge-neutral" style={{ fontSize: 11 }}>{project.role}</span>
                <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>{project.period}</span>
            </div>

            {/* Description */}
            <p style={{ fontSize: 'clamp(13px, 3.6vw, 14px)', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: 18 }}>
                {project.description}
            </p>

            {/* Achievements for featured */}
            {isFeatured && project.achievements && (
                <ul style={{ marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {project.achievements.slice(0, 3).map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            <span style={{ color: 'var(--accent)', marginTop: 6, flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            {/* Tech stack */}
            <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
