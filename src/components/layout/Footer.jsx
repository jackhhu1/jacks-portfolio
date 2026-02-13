import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 dark:border-neutral-800 mt-auto py-12 bg-white dark:bg-neutral-950">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Jack Hu</span>
                    <span className="text-xs text-gray-400">Built with Vite & Tailwind. Designed for clarity.</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Github">
                        <Github size={18} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Twitter">
                        <Twitter size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
