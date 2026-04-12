const SectionHeader = ({ label, title, subtitle }) => {
    return (
        <div style={{ marginBottom: 'clamp(28px, 6vw, 40px)' }}>
            {label && (
                <span className="badge badge-accent" style={{ marginBottom: 12, fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    {label}
                </span>
            )}
            <h2 style={{ fontSize: 'clamp(24px, 6vw, 28px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: subtitle ? 10 : 0 }}>
                {title}
            </h2>
            {subtitle && (
                <p style={{ fontSize: 'clamp(14px, 3.8vw, 15px)', color: 'var(--text-muted)', maxWidth: 520, lineHeight: 1.6 }}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
