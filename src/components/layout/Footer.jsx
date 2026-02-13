import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 dark:border-neutral-800 mt-auto py-12">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <span className="text-sm text-gray-400">© {new Date().getFullYear()} Jack Hu. All rights reserved.</span>
                    <span className="text-xs text-gray-400">Built with Vite, React, & Tailwind</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Github">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Twitter">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
