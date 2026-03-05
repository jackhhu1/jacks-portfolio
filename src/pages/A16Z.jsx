import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Globe } from 'lucide-react';
import KindlingLogoPng from '../assets/KindlingLogo.png';

// ─── Achievement/Project Data ────────────────────────────────────
const highlights = [
    {
        id: 'kindling',
        label: 'Build and ship consumer software',
        tag: 'Software Studio',
        title: 'Kindling Labs',
        description: 'Founded a software studio focused on consumer mobile apps. Shipped Tell Me Your Story to live users within a month. Selected for a mentorship program run by a top ANZ VC. 2 additional products in active development.',
        link: 'https://tellmeyourstory.app',
        linkLabel: 'Try Tell Me Your Story →',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 'hackathon',
        label: 'Win a Stanford AI hackathon',
        tag: 'AI / Product',
        title: 'Stanford x Flower Hackathon',
        description: 'Named winner at a 12-hour hackathon hosted by Stanford University and Flower Labs. Competed solo against ~200 participants including engineers from Meta, Apple, Google, Amazon, and IBM. Built a privacy-preserving federated learning app for skin lesion classification.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 'ai-data',
        label: 'Curate data for frontier AI labs',
        tag: 'AI / Engineering',
        title: 'AI Data Specialist',
        description: 'Oversaw data quality for training and evaluating frontier models at labs including Anthropic, Google, and Eleven Labs. Maintained 98%+ quality score across all engagements. Established new internal quality benchmarks.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 'caprae',
        label: 'Scale a PE advisory product 0 → $400k ARR',
        tag: 'Strategy',
        title: 'Caprae Capital',
        description: 'Promoted from intern to strategy lead (top performer in a cohort of 50+ students from Harvard, MIT, Yale etc.). Worked directly with the CEO to grow a new product line from $0 to $400k ARR in 9 months, contributing to $50M in aggregate deal value.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 'enactus',
        label: 'Transform a 50-person org → World Top 16',
        tag: 'Leadership',
        title: 'Enactus President',
        description: 'Inherited an organisation with 50%+ churn. Tripled revenue ($25k → $75k), lifted NPS from 51 → 90, and achieved highest member retention in chapter history. The team placed World Top 16 at the Enactus World Cup.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 'conference',
        label: 'Present research at an international conference',
        tag: 'Research',
        title: 'International Conference Speaker',
        description: 'Selected as 1 of 5 students globally to present an abstract at the Enactus Global Research Network international conference.',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
];

// ─── Showcase Card (Right Panel) ─────────────────────────────────
const ShowcaseCard = ({ highlight, isVisible }) => {
    return (
        <div
            className={`relative w-full h-full rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-8">
                <span className="inline-block self-start px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-semibold uppercase tracking-wider text-white/80 mb-4">
                    {highlight.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    {highlight.title}
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed mb-5 max-w-lg">
                    {highlight.description}
                </p>
                {highlight.link && (
                    <a
                        href={highlight.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors group"
                    >
                        {highlight.linkLabel || 'View Project'}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                )}
            </div>
        </div>
    );
};

// ─── Main Page ───────────────────────────────────────────────────
const A16Z = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
    const containerRef = useRef(null);

    // Auto-cycle through highlights if user hasn't interacted
    useEffect(() => {
        if (hasInteracted) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % highlights.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [hasInteracted]);

    const handleHover = (index) => {
        setHasInteracted(true);
        setActiveIndex(index);
    };

    return (
        <div className="a16z-page min-h-screen bg-black text-white selection:bg-white/20">
            {/* Subtle ambient glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-[60vw] h-[40vh] bg-gradient-to-br from-blue-900/8 via-purple-900/5 to-transparent rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[40vw] h-[30vh] bg-gradient-to-tl from-indigo-900/8 to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 min-h-screen flex flex-col" ref={containerRef}>

                {/* ── Header ── */}
                <header className="mb-12 md:mb-16">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                            a16z Alpha Fellowship Application
                        </span>
                    </div>
                </header>

                {/* ── Main Content: Two Columns ── */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Column — Intro + Interactive List */}
                    <div className="flex flex-col justify-between h-full">
                        {/* Intro */}
                        <div className="mb-12">
                            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6">
                                Jack Hu
                            </h1>
                            <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-md">
                                I build software, scale organisations, and operate at the intersection of strategy and engineering. Currently running{' '}
                                <a href="https://tellmeyourstory.app" target="_blank" rel="noopener noreferrer" className="text-white/80 underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-colors">
                                    Kindling Labs
                                </a>
                                , a software studio shipping consumer apps.
                            </p>
                        </div>

                        {/* Interactive Achievement List */}
                        <div className="mb-12">
                            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">
                                What has Jack done?
                            </h2>
                            <div className="space-y-1">
                                {highlights.map((highlight, index) => (
                                    <button
                                        key={highlight.id}
                                        onMouseEnter={() => handleHover(index)}
                                        onClick={() => handleHover(index)}
                                        className={`
                                            w-full text-left px-4 py-3 rounded-xl transition-all duration-300 group flex items-center gap-3
                                            ${activeIndex === index
                                                ? 'bg-white/[0.06] text-white'
                                                : hasInteracted
                                                    ? 'text-white/25 hover:text-white/60 hover:bg-white/[0.03]'
                                                    : 'text-white/40 hover:text-white/70 hover:bg-white/[0.03]'
                                            }
                                        `}
                                    >
                                        <span className={`
                                            w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300
                                            ${activeIndex === index ? 'bg-white scale-100' : 'bg-white/20 scale-75'}
                                        `} />
                                        <span className="text-sm md:text-base font-medium tracking-tight">
                                            {highlight.label}
                                        </span>
                                        <ArrowRight
                                            size={14}
                                            className={`ml-auto flex-shrink-0 transition-all duration-300 ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Additional Achievements — flowing text */}
                        <div className="mb-12">
                            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">
                                What else has Jack done?
                            </h2>
                            <p className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.2] tracking-tight">
                                {[
                                    { text: 'Win AFR Top 100 Future Leaders.', hoverable: true },
                                    { text: 'Runner-up national case comp (232 teams).', hoverable: true },
                                    { text: 'State debating semi-finalist (undefeated 9 rounds).', hoverable: true },
                                    { text: 'Grow UN Youth engagement 198%.', hoverable: true },
                                    { text: 'Lead 3,250 army cadets.', hoverable: true },
                                    { text: 'Raise $10k as Rotary Co-President.', hoverable: true },
                                    { text: 'Coach 3 undefeated teams.', hoverable: true },
                                ].map((item, i) => (
                                    <span
                                        key={i}
                                        className="a16z-flow-phrase text-white/30 hover:text-white transition-colors duration-300 cursor-default"
                                    >
                                        {item.text}{' '}
                                    </span>
                                ))}
                                <a
                                    href="/a16z/projects"
                                    className="a16z-flow-phrase text-white hover:text-white/60 transition-colors duration-300 underline underline-offset-4 decoration-white/30 hover:decoration-white/60"
                                >
                                    And much, much more.
                                </a>
                            </p>
                        </div>

                        {/* Bottom: Socials + Status */}
                        <div className="flex items-center gap-6 mt-auto pt-8 border-t border-white/[0.06]">
                            <a href="mailto:jack@kindlinglabs.com" className="text-white/30 hover:text-white transition-colors" aria-label="Email">
                                <Mail size={18} />
                            </a>
                            <a href="https://github.com/jackhhu" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="https://linkedin.com/in/jackhu" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="/" className="text-white/30 hover:text-white transition-colors" aria-label="Portfolio">
                                <Globe size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column — Dynamic Showcase Card */}
                    <div className="hidden lg:block h-[600px] sticky top-20">
                        {highlights.map((highlight, index) => (
                            <div
                                key={highlight.id}
                                className={`absolute inset-0 transition-all duration-500 ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <ShowcaseCard
                                    highlight={highlight}
                                    isVisible={activeIndex === index}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Show active card below */}
                    <div className="lg:hidden">
                        <div className="h-[400px] relative">
                            {highlights.map((highlight, index) => (
                                <div
                                    key={highlight.id}
                                    className={`absolute inset-0 transition-all duration-500 ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                >
                                    <ShowcaseCard
                                        highlight={highlight}
                                        isVisible={activeIndex === index}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default A16Z;
