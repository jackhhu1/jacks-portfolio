import { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowRight, Flame, Zap, Rocket, Terminal, CheckCircle2, Circle, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase';

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

// ─── Kindling Labs Gamified Widget ──────────────────────────────
const KindlingLabsWidget = () => {
    const [activeTab, setActiveTab] = useState('status');
    const [typedText, setTypedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = '> building something new...';

    // Typewriter effect
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= fullText.length) {
                setTypedText(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 80);
        return () => clearInterval(interval);
    }, []);

    // Blinking cursor
    useEffect(() => {
        const interval = setInterval(() => setShowCursor(prev => !prev), 530);
        return () => clearInterval(interval);
    }, []);

    const milestones = [
        { label: 'Idea validated', done: true },
        { label: 'MVP shipped', done: true },
        { label: 'Beta users onboarded', done: true },
        { label: 'Product-market fit', done: false, active: true },
        { label: 'Scale', done: false },
    ];

    const stats = [
        { label: 'Products shipped', value: '5', icon: Rocket },
        { label: 'Lines of code', value: '42k', icon: Terminal },
        { label: 'Active users', value: '10k+', icon: Zap },
    ];

    return (
        <div className="glass rounded-2xl overflow-hidden max-w-sm w-full">
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200/50 dark:border-white/10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <Flame size={16} className="text-white" />
                </div>
                <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Kindling Labs</div>
                    <div className="text-[11px] text-green-600 dark:text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Currently building
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200/50 dark:border-white/10">
                {['status', 'stats', 'log'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-2.5 text-[11px] font-semibold uppercase tracking-wider transition-all
                            ${activeTab === tab
                                ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white'
                                : 'text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-5 min-h-[180px]">
                {activeTab === 'status' && (
                    <div className="space-y-3">
                        {milestones.map((m, i) => (
                            <div key={i} className="flex items-center gap-3">
                                {m.done ? (
                                    <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                ) : m.active ? (
                                    <Loader2 size={16} className="text-orange-500 animate-spin shrink-0" />
                                ) : (
                                    <Circle size={16} className="text-gray-300 dark:text-gray-700 shrink-0" />
                                )}
                                <span className={`text-sm ${m.done
                                        ? 'text-gray-500 dark:text-gray-400 line-through'
                                        : m.active
                                            ? 'text-gray-900 dark:text-white font-medium'
                                            : 'text-gray-400 dark:text-gray-600'
                                    }`}>
                                    {m.label}
                                </span>
                                {m.active && (
                                    <span className="ml-auto text-[10px] bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded-full font-semibold">
                                        IN PROGRESS
                                    </span>
                                )}
                            </div>
                        ))}
                        {/* Progress bar */}
                        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5">
                            <div className="flex justify-between text-[11px] text-gray-500 mb-1.5">
                                <span>Progress</span>
                                <span>60%</span>
                            </div>
                            <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-[60%] bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000"></div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'stats' && (
                    <div className="space-y-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <div className="flex items-center gap-3">
                                    <stat.icon size={16} className="text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                                </div>
                                <span className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'log' && (
                    <div className="font-mono text-xs leading-relaxed space-y-1.5">
                        <div className="text-green-600 dark:text-green-400">✓ deployed v2.4.1 to production</div>
                        <div className="text-gray-500 dark:text-gray-500">  2 hours ago</div>
                        <div className="text-blue-600 dark:text-blue-400 mt-3">→ refactoring auth module</div>
                        <div className="text-gray-500 dark:text-gray-500">  in progress</div>
                        <div className="text-gray-400 dark:text-gray-600 mt-3">⊘ planning: analytics dashboard v3</div>
                        <div className="text-gray-500 dark:text-gray-500">  queued</div>
                        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 text-gray-500">
                            {typedText}
                            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>▊</span>
                        </div>
                    </div>
                )}
            </div>
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
