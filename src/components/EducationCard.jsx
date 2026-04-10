import { GraduationCap, Award, Trophy } from 'lucide-react';

const EducationCard = ({ education, certifications, achievements }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Education */}
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <GraduationCap size={16} style={{ color: 'var(--accent-light)' }} />
                    <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>Education</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {education.map((edu) => (
                        <div key={edu.id} className="card" style={{ padding: '20px 24px' }}>
                            <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{edu.degree}</h4>
                            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>{edu.school}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <span className={edu.highlight ? "badge badge-accent" : "badge badge-neutral"} style={{ fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                                    {edu.details}
                                </span>
                                <span style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{edu.period}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <Award size={16} style={{ color: 'var(--accent-light)' }} />
                    <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>Certifications</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
                    {certifications.map((cert) => (
                        <div key={cert.id} className="card" style={{ padding: '16px 20px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                <span style={{ fontSize: 18, lineHeight: 1 }}>{cert.icon}</span>
                                <div>
                                    <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{cert.title}</h4>
                                    <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.4 }}>{cert.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Achievements */}
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <Trophy size={16} style={{ color: 'var(--accent-light)' }} />
                    <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>Achievements</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {achievements.map((ach) => (
                        <div key={ach.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}>
                            <span style={{ fontSize: 16 }}>{ach.icon}</span>
                            <div>
                                <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{ach.title}</h4>
                                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{ach.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
