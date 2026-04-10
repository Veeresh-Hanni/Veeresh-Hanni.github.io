const SectionHeader = ({ label, title, subtitle }) => {
    return (
        <div style={{ marginBottom: 40 }}>
            {label && (
                <span className="badge badge-accent" style={{ marginBottom: 12, fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    {label}
                </span>
            )}
            <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: subtitle ? 10 : 0 }}>
                {title}
            </h2>
            {subtitle && (
                <p style={{ fontSize: 15, color: 'var(--text-muted)', maxWidth: 520, lineHeight: 1.6 }}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
