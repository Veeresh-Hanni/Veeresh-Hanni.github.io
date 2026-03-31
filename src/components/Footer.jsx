import { personalInfo } from '../data/portfolioData';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 border-t border-slate-800 text-center mt-20">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Scalable</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                I am currently looking for full-time Software Engineering roles.
                Reach out to discuss how my full-stack skills can help your team.
            </p>
            <a href={personalInfo.social.email} className="inline-block px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-all mx-auto">
                Say Hello
            </a>
            <p className="mt-12 text-slate-600 text-sm">
                © {new Date().getFullYear()} {personalInfo.name}. Open to Work.
            </p>
        </footer>
    );
};

export default Footer;