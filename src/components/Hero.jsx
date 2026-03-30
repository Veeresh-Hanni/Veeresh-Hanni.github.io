import { Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row gap-12 items-center py-20">
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-sm font-medium border border-teal-400/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    Open to Work
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                    {personalInfo.name}
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
                    {personalInfo.tagline}
                </p>

                <div className="flex gap-4 pt-4">
                    <a href="#contact" className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-all flex items-center gap-2">
                        <Mail size={18} /> Contact Me
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Hero;