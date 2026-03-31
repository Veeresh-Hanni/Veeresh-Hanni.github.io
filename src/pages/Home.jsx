import { useEffect } from 'react';
import { Award } from 'lucide-react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { education, experience, projects, skills } from '../data/portfolioData';

const Home = ({ initialSection }) => {
    useEffect(() => {
        if (!initialSection) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const section = document.getElementById(initialSection);
        if (!section) {
            return;
        }

        const timer = window.setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);

        return () => window.clearTimeout(timer);
    }, [initialSection]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-teal-500/30 selection:text-teal-200">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6">
                <Hero />

                {/* Skills Section */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-white">Technical Arsenal</h2>
                        <div className="h-px bg-slate-800 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((skill) => (
                            <div key={skill.id} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                                <div className="text-teal-500 mb-3"><skill.icon size={24} /></div>
                                <h3 className="text-slate-200 font-medium mb-2 text-sm uppercase tracking-wider">{skill.category}</h3>
                                <ul className="space-y-1">
                                    {skill.items.map((item, i) => (
                                        <li key={i} className="text-slate-400 text-sm">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-2xl font-bold text-white">Selected Works</h2>
                        <div className="h-px bg-slate-800 flex-1"></div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>

                {/* Experience & Education Grid */}
                <div id="experience" className="grid md:grid-cols-2 gap-12">

                    {/* Experience */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold text-white">Experience</h2>
                            <div className="h-px bg-slate-800 flex-1"></div>
                        </div>
                        {experience.map((exp) => (
                            <div key={exp.id} className="relative pl-8 border-l border-slate-800 space-y-2">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-teal-500"></div>
                                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                                <div className="flex justify-between text-sm text-slate-500 mb-4">
                                    <span>{exp.company}</span>
                                    <span>{exp.period}</span>
                                </div>
                                <ul className="space-y-2">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                                            <span className="text-teal-500 mt-1.5">›</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Education & Certs */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold text-white">Education & Certs</h2>
                            <div className="h-px bg-slate-800 flex-1"></div>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu) => (
                                <div key={edu.id} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                    <h3 className="text-white font-semibold mb-1">{edu.degree}</h3>
                                    <p className="text-slate-500 text-sm mb-2">{edu.school} • {edu.details}</p>
                                    <div className="text-xs text-teal-400 bg-teal-400/10 inline-block px-2 py-1 rounded">{edu.period}</div>
                                </div>
                            ))}

                            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Hackathons & Certs</h4>
                                <ul className="space-y-3 text-sm text-slate-300">
                                    <li className="flex gap-2"><Award className="text-teal-500" size={16} /> Odoo Hackathon 2025</li>
                                    <li className="flex gap-2"><Award className="text-teal-500" size={16} /> Google Baseline Tooling Hackathon</li>
                                    <li className="flex gap-2"><Award className="text-teal-500" size={16} /> Scaler Academy: Java, DSA & OOP</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
