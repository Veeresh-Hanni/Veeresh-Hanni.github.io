import { Github, Linkedin } from 'lucide-react';
import logo from '../assets/veeresh-hanni.png';
import { personalInfo } from '../data/portfolioData';
const Navbar = () => {
    return (
        <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-bold text-xl text-teal-400 tracking-tight cursor-pointer">
                    <img src={logo} alt="Veeresh Hanni" className="w-15 h-15 mr-2 inline-block bg-none rounded-2xl border-amber-50" />VH<span className="text-white">.</span>
                </span>
                <div className="flex gap-6 items-center">
                    <a href="#/projects" className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors hidden sm:block">Work</a>
                    <a href="#/experience" className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors hidden sm:block">Experience</a>
                    <div className="h-4 w-px bg-slate-800 hidden sm:block"></div>
                    <div className="flex gap-4">
                        <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
