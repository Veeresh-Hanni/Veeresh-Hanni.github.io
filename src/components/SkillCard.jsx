const SkillCard = ({ skill }) => {
    const Icon = skill.icon;
    return (
        <div className="card" style={{ padding: 'clamp(18px, 4vw, 28px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)' }}>
                    <Icon size={15} />
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{skill.category}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {skill.items.map((item, i) => (
                    <span key={i} className="tech-tag">{item}</span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
