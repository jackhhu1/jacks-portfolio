import { useRef, useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Background Gradient Mesh */}
            <div className="fixed inset-0 min-h-screen w-full pointer-events-none -z-10">
                <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] bg-purple-300/30 dark:bg-purple-900/10 rounded-full blur-[100px] animate-soft-pulse"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-blue-300/30 dark:bg-blue-900/10 rounded-full blur-[100px]" style={{ animationDuration: '7s' }}></div>
            </div>

            {/* Hero Section */}
            <section className="container-custom flex flex-col justify-center min-h-[95vh] py-20 relative animate-fade-in">
                <div className="max-w-4xl relative z-10">
                    <span className="inline-block px-4 py-1.5 mb-8 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-widest backdrop-blur-md">
                        Strategy • Product • Design
                    </span>

                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter mb-8 leading-[0.95] text-gray-900 dark:text-white">
                        Building scalable systems for <span className="text-gray-400 dark:text-gray-500 italic font-serif">ambiguous</span> problems.
                    </h1>

                    <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-12 max-w-xl">
                        Operating at the intersection of strategy, software, and community. Currently building <span className="text-gray-900 dark:text-white font-medium">Kindling Labs</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <button onClick={() => navigate('/projects')} className="btn btn-primary group px-8 py-4 text-base tracking-wide">
                            View Selected Work
                            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                        <button onClick={() => navigate('/about')} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest border-b border-transparent hover:border-gray-900 dark:hover:border-white pb-0.5">
                            More About Me
                        </button>
                    </div>
                </div>

                {/* Subtle scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce duration-[2000ms] opacity-50">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-600">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600 dark:to-transparent"></div>
                </div>
            </section>

            {/* Project Showcase */}
            <ProjectShowcase />

            {/* Footer / Contact CTA */}
            <section className="py-32 border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-black/40">
                <div className="container-custom flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <div>
                        <h2 className="text-4xl font-medium tracking-tight mb-4 text-gray-900 dark:text-white">Let's build something.</h2>
                        <p className="text-gray-600 dark:text-gray-500 max-w-md">Open to select advisory roles and interesting conversations.</p>
                    </div>
                    <button onClick={() => navigate('/contact')} className="group flex items-center gap-4 text-2xl font-light text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                        Get in touch
                        <span className="p-4 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 group-hover:bg-gray-100 dark:group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
