import { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase';
import KindlingLogoPng from '../assets/KindlingLogo.png';

// ─── Scattered Images ───────────────────────────────────────────
const scatteredImages = [
    {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Team collaboration',
        label: 'Enactus',
        style: { top: '5%', left: '55%', rotate: '-4deg', width: '280px', height: '200px', zIndex: 3 },
    },
    {
        src: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Nature materials',
        label: 'Caprae',
        style: { top: '18%', left: '74%', rotate: '6deg', width: '230px', height: '300px', zIndex: 2 },
    },
    {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Analytics dashboard',
        label: 'Kindling Labs',
        style: { top: '52%', left: '58%', rotate: '3deg', width: '260px', height: '180px', zIndex: 4 },
    },
    {
        src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Presenting on stage',
        label: 'Leadership',
        style: { top: '38%', left: '80%', rotate: '-7deg', width: '220px', height: '170px', zIndex: 1 },
    },
    {
        src: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Mobile app',
        label: 'Product',
        style: { top: '65%', left: '75%', rotate: '5deg', width: '200px', height: '260px', zIndex: 5 },
    },
];

// ─── Scattered Photo Component (hover to expand) ────────────────
const ScatteredPhoto = ({ image, index, hoveredIndex, onHover, onLeave }) => {
    const isHovered = hoveredIndex === index;
    const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

    return (
        <div
            onMouseEnter={() => onHover(index)}
            onMouseLeave={onLeave}
            className={`absolute cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-xl overflow-hidden shadow-2xl border-2 select-none
                ${isHovered
                    ? 'z-50 border-white/40 dark:border-white/30 shadow-black/40 scale-[1.35]'
                    : 'border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20'
                }
                ${isOtherHovered ? 'opacity-40 scale-[0.97] blur-[2px]' : 'opacity-100'}
            `}
            style={{
                top: image.style.top,
                left: image.style.left,
                width: image.style.width,
                height: image.style.height,
                transform: `rotate(${isHovered ? '0deg' : image.style.rotate}) scale(${isHovered ? 1.35 : isOtherHovered ? 0.97 : 1})`,
                zIndex: isHovered ? 50 : image.style.zIndex,
            }}
        >
            <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                draggable={false}
            />
            {/* Label overlay */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                <span className="text-white text-sm font-semibold tracking-wide">{image.label}</span>
            </div>
        </div>
    );
};

// ─── Kindling Labs Simple Widget ────────────────────────────────
const KindlingLabsWidget = () => {
    return (
        <div className="glass rounded-2xl overflow-hidden max-w-sm w-full p-5 flex items-center gap-4 border border-gray-200/50 dark:border-white/10 hover:border-orange-500/30 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <img src={KindlingLogoPng} alt="Kindling Labs" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
                <div className="text-base font-bold text-gray-900 dark:text-white mb-0.5 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Kindling Labs</div>
                <div className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1.5 font-medium">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Currently building something new
                </div>
            </div>
            <ArrowRight size={16} className="ml-auto text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
        </div>
    );
};

// ─── Home Page ──────────────────────────────────────────────────
const Home = () => {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Background Gradient Mesh */}
            <div className="fixed inset-0 min-h-screen w-full pointer-events-none -z-10">
                <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] bg-purple-300/20 dark:bg-purple-900/10 rounded-full blur-[120px] animate-soft-pulse"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-[120px]" style={{ animationDuration: '7s' }}></div>
            </div>

            {/* Hero Section */}
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
                            Operating at the intersection of strategy, software, and community.
                        </p>

                        {/* Kindling Labs Widget */}
                        <div className="mb-12">
                            <KindlingLabsWidget />
                        </div>

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
                <div className="absolute inset-0 hidden lg:block">
                    {scatteredImages.map((image, index) => (
                        <ScatteredPhoto
                            key={index}
                            image={image}
                            index={index}
                            hoveredIndex={hoveredIndex}
                            onHover={setHoveredIndex}
                            onLeave={() => setHoveredIndex(null)}
                        />
                    ))}
                </div>

                {/* Mobile: Horizontal scrolling strip */}
                <div className="lg:hidden px-6 pb-12 -mt-8">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                        {scatteredImages.map((image, index) => (
                            <div key={index} className="shrink-0 w-56 h-36 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10">
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
