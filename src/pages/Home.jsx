import { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase';

// Scattered photo data — each has position offsets, rotation, and z-index
const scatteredImages = [
    {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Team collaboration',
        label: 'Enactus',
        style: { top: '8%', left: '58%', rotate: '-4deg', width: '220px', height: '160px', zIndex: 3 },
        expandedStyle: { width: '500px', height: '360px' },
    },
    {
        src: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Nature materials',
        label: 'Caprae',
        style: { top: '22%', left: '72%', rotate: '6deg', width: '180px', height: '240px', zIndex: 2 },
        expandedStyle: { width: '400px', height: '520px' },
    },
    {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Analytics dashboard',
        label: 'Kindling Labs',
        style: { top: '55%', left: '62%', rotate: '3deg', width: '200px', height: '140px', zIndex: 4 },
        expandedStyle: { width: '460px', height: '320px' },
    },
    {
        src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Presenting on stage',
        label: 'Leadership',
        style: { top: '42%', left: '78%', rotate: '-7deg', width: '170px', height: '130px', zIndex: 1 },
        expandedStyle: { width: '420px', height: '310px' },
    },
    {
        src: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Mobile app',
        label: 'Product',
        style: { top: '68%', left: '76%', rotate: '5deg', width: '150px', height: '200px', zIndex: 5 },
        expandedStyle: { width: '340px', height: '450px' },
    },
];

const ScatteredPhoto = ({ image, index, expandedIndex, onToggle }) => {
    const isExpanded = expandedIndex === index;
    const isOtherExpanded = expandedIndex !== null && expandedIndex !== index;

    return (
        <button
            onClick={() => onToggle(index)}
            className={`absolute group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-lg overflow-hidden shadow-2xl border-2 select-none
                ${isExpanded
                    ? 'z-50 border-white/40 dark:border-white/30 shadow-black/40'
                    : 'border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 hover:shadow-black/30'
                }
                ${isOtherExpanded ? 'opacity-30 scale-95 blur-[1px]' : 'opacity-100'}
            `}
            style={{
                top: image.style.top,
                left: image.style.left,
                width: isExpanded ? image.expandedStyle.width : image.style.width,
                height: isExpanded ? image.expandedStyle.height : image.style.height,
                transform: `rotate(${isExpanded ? '0deg' : image.style.rotate})`,
                zIndex: isExpanded ? 50 : image.style.zIndex,
            }}
        >
            <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700"
                draggable={false}
            />
            {/* Label that appears on hover or when expanded */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                <span className="text-white text-xs font-medium tracking-wider uppercase">{image.label}</span>
            </div>
            {/* Expand indicator */}
            {!isExpanded && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}
        </button>
    );
};

const Home = () => {
    const navigate = useNavigate();
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = useCallback((index) => {
        setExpandedIndex(prev => prev === index ? null : index);
    }, []);

    // Close expanded image on Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setExpandedIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Background Gradient Mesh */}
            <div className="fixed inset-0 min-h-screen w-full pointer-events-none -z-10">
                <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] bg-purple-300/20 dark:bg-purple-900/10 rounded-full blur-[120px] animate-soft-pulse"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-[120px]" style={{ animationDuration: '7s' }}></div>
            </div>

            {/* Hero Section with Scattered Images */}
            <section className="relative min-h-screen overflow-hidden">
                {/* Text Content — Left Side */}
                <div className="container-custom flex flex-col justify-center min-h-screen py-32 relative z-10">
                    <div className="max-w-xl">
                        <span className="inline-block px-4 py-1.5 mb-8 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100/80 dark:bg-white/5 text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-widest backdrop-blur-md">
                            Strategy • Product • Design
                        </span>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 leading-[0.92] text-gray-900 dark:text-white">
                            Building scalable systems for <span className="text-gray-400 dark:text-gray-500 italic font-serif">ambiguous</span> problems.
                        </h1>

                        <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-12 max-w-md">
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
                </div>

                {/* Scattered Images — Right Side (Desktop Only) */}
                <div className="absolute inset-0 hidden lg:block pointer-events-auto" onClick={(e) => {
                    // Click on backdrop to close expanded image
                    if (e.target === e.currentTarget) setExpandedIndex(null);
                }}>
                    {scatteredImages.map((image, index) => (
                        <ScatteredPhoto
                            key={index}
                            image={image}
                            index={index}
                            expandedIndex={expandedIndex}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>

                {/* Mobile: Horizontal scrolling strip */}
                <div className="lg:hidden px-6 pb-12 -mt-8">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                        {scatteredImages.map((image, index) => (
                            <div key={index} className="shrink-0 w-48 h-32 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10">
                                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
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
