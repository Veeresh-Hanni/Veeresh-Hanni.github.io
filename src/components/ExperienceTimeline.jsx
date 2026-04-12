const ExperienceTimeline = ({ experience }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {experience.map((exp) => (
                <div key={exp.id} className="card" style={{ padding: 'clamp(20px, 4.5vw, 32px)' }}>
                    {/* Header */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4, gap: 8 }}>
                        <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)' }}>
                            {exp.role}
                        </h3>
                        <span className="badge badge-neutral" style={{ fontSize: 11, fontFamily: 'var(--font-mono)' }}>
                            {exp.period}
                        </span>
                    </div>

                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--accent-light)' }}>
                            {exp.company}
                        </span>
                        <span className="badge badge-accent" style={{ fontSize: 10 }}>
                            {exp.type}
                        </span>
                    </div>

                    {/* Achievements */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {exp.achievements.map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: 8 }} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ExperienceTimeline;
