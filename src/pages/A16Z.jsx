import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Globe } from 'lucide-react';

// ─── All showcase items: intro (0-2) then "what else" (3+) ──────
const allItems = [
    // ── Intro phrases ───────────────────────────────────────────
    {
        text: 'A competitive builder.',
        tag: 'Sport',
        title: 'Semi-Professional Soccer Player',
        description: 'Competed at semi-professional level across multiple seasons. Built discipline, resilience, and a competitive edge that carries into everything else.',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        text: 'Built products from scratch.',
        tag: 'Software Studio',
        title: 'Kindling Labs',
        description: 'Founded a software studio focused on consumer mobile apps. Shipped Tell Me Your Story to live users within a month. Selected for a mentorship program run by a top ANZ VC. 2 additional products in active development.',
        link: 'https://tellmeyourstory.app',
        linkLabel: 'Try Tell Me Your Story →',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        text: 'Scaled organisations.',
        tag: 'Leadership',
        title: 'Enactus President',
        description: 'Inherited an organisation with 50%+ churn. Tripled revenue ($25k → $75k), lifted NPS from 51 → 90, and achieved highest retention in chapter history. Placed World Top 16 at the Enactus World Cup.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    // ── "What else" phrases ─────────────────────────────────────
    {
        text: 'Win a Stanford AI hackathon.',
        tag: 'AI / Product',
        title: 'Stanford x Flower Hackathon',
        description: 'Named winner at a 12-hour hackathon hosted by Stanford University and Flower Labs. Competed solo against ~200 participants including engineers from Meta, Apple, Google, Amazon, and IBM.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        text: 'Curate data for frontier AI labs.',
        tag: 'AI / Engineering',
        title: 'AI Data Specialist',
        description: 'Oversaw data quality for training and evaluating frontier models at labs including Anthropic, Google, and Eleven Labs. Maintained 98%+ quality score across all engagements.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        text: 'Scale a PE advisory product 0 → $400k ARR.',
        tag: 'Strategy',
        title: 'Caprae Capital',
        description: 'Promoted to strategy lead (top performer in a cohort of 50+ from Harvard, MIT, Yale etc.). Grew a new product line from $0 to $400k ARR in 9 months, contributing to $50M in deal value.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        text: 'Present research at an international conference.',
        tag: 'Research',
        title: 'International Conference Speaker',
        description: 'Selected as 1 of 5 students globally to present an abstract at the Enactus Global Research Network international conference.',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        text: 'Win AFR Top 100 Future Leaders.',
        tag: 'Recognition',
        title: 'AFR Top 100 Future Leaders',
        description: 'Selected by Gradconnection and the Australian Financial Review as one of 100 impactful young Australians for building resilient communities.',
        image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
];

const INTRO_COUNT = 3; // first 3 items are intro phrases

// ─── Showcase Card (Right Panel) ─────────────────────────────────
const ShowcaseCard = ({ item, isVisible }) => {
    if (!item) return null;
    return (
        <div
            className={`relative w-full h-full rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
            <div className="absolute inset-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <span className="inline-block self-start px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-white/80 mb-3">
                    {item.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                    {item.title}
                </h3>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-4 max-w-lg">
                    {item.description}
                </p>
                {item.link && (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-white/80 transition-colors group"
                    >
                        {item.linkLabel || 'View Project'}
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
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

    // Auto-cycle through all items
    useEffect(() => {
        if (hasInteracted) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % allItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [hasInteracted]);

    const handleHover = (index) => {
        setHasInteracted(true);
        setActiveIndex(index);
    };

    const introItems = allItems.slice(0, INTRO_COUNT);
    const elseItems = allItems.slice(INTRO_COUNT);

    return (
        <div className="a16z-page min-h-screen bg-[#070707] text-white selection:bg-[#FF4F00]/30">
            {/* Subtle ambient glow — warm tint */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[50vw] h-[35vh] bg-gradient-to-br from-[#FF4F00]/[0.03] via-transparent to-transparent rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[25vh] bg-gradient-to-tr from-[#FF4F00]/[0.02] to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16 min-h-screen flex flex-col">

                {/* ── Header ── */}
                <header className="mb-10 md:mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] animate-pulse" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                            a16z Alpha Fellowship
                        </span>
                    </div>
                </header>

                {/* ── Main Content: Two Columns ── */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-12 items-start">

                    {/* Left Column */}
                    <div className="flex flex-col justify-between h-full">

                        {/* Intro — flowing hoverable text */}
                        <div className="mb-10">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-5">
                                <span className="text-[#FF4F00]">Jack Hu</span>
                            </h1>
                            <p className="text-xl md:text-[1.35rem] lg:text-[1.5rem] font-medium leading-[1.35] tracking-tight">
                                {/* "A competitive builder." — hoverable */}
                                <span
                                    onMouseEnter={() => handleHover(0)}
                                    className={`inline cursor-default transition-colors duration-300 ${activeIndex === 0 ? 'text-white' : hasInteracted ? 'text-white/20 hover:text-white/50' : 'text-white/25 hover:text-white/50'}`}
                                >
                                    {introItems[0].text}
                                </span>{' '}
                                {/* "Trained at Unimelb and UIUC." — static context */}
                                <span className="text-white/20">
                                    Trained at Unimelb and UIUC.
                                </span>{' '}
                                {/* "Built products from scratch." — hoverable */}
                                <span
                                    onMouseEnter={() => handleHover(1)}
                                    className={`inline cursor-default transition-colors duration-300 ${activeIndex === 1 ? 'text-white' : hasInteracted ? 'text-white/20 hover:text-white/50' : 'text-white/25 hover:text-white/50'}`}
                                >
                                    {introItems[1].text}
                                </span>{' '}
                                {/* "Scaled organisations." — hoverable */}
                                <span
                                    onMouseEnter={() => handleHover(2)}
                                    className={`inline cursor-default transition-colors duration-300 ${activeIndex === 2 ? 'text-white' : hasInteracted ? 'text-white/20 hover:text-white/50' : 'text-white/25 hover:text-white/50'}`}
                                >
                                    {introItems[2].text}
                                </span>
                            </p>
                        </div>

                        {/* ── "What else" — flowing hoverable text ── */}
                        <div className="mb-8">
                            <h2 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25 mb-5">
                                What else has Jack done?
                            </h2>
                            <p className="text-xl md:text-[1.35rem] lg:text-[1.5rem] font-medium leading-[1.35] tracking-tight">
                                {elseItems.map((item, i) => {
                                    const globalIndex = INTRO_COUNT + i;
                                    return (
                                        <span
                                            key={globalIndex}
                                            onMouseEnter={() => handleHover(globalIndex)}
                                            className={`inline cursor-default transition-colors duration-300 ${activeIndex === globalIndex
                                                ? 'text-white'
                                                : hasInteracted
                                                    ? 'text-white/20 hover:text-white/50'
                                                    : 'text-white/25 hover:text-white/50'
                                                }`}
                                        >
                                            {item.text}{' '}
                                        </span>
                                    );
                                })}
                                <a
                                    href="/a16z/projects"
                                    className="inline text-[#FF4F00]/80 hover:text-[#FF4F00] transition-colors duration-300 underline underline-offset-4 decoration-[#FF4F00]/30 hover:decoration-[#FF4F00]/70"
                                >
                                    And much, much more.
                                </a>
                            </p>
                        </div>

                        {/* Bottom: Socials */}
                        <div className="flex items-center gap-5 mt-auto pt-6 border-t border-white/[0.06]">
                            <a href="mailto:jack@kindlinglabs.com" className="text-white/20 hover:text-[#FF4F00] transition-colors" aria-label="Email">
                                <Mail size={16} />
                            </a>
                            <a href="https://github.com/jackhhu" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#FF4F00] transition-colors" aria-label="GitHub">
                                <Github size={16} />
                            </a>
                            <a href="https://linkedin.com/in/jackhu" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#FF4F00] transition-colors" aria-label="LinkedIn">
                                <Linkedin size={16} />
                            </a>
                            <a href="/" className="text-white/20 hover:text-[#FF4F00] transition-colors" aria-label="Portfolio">
                                <Globe size={16} />
                            </a>
                            <div className="ml-auto flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-medium text-white/20 tracking-wide">Current: Kindling Labs</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Dynamic Showcase Card */}
                    <div className="hidden lg:block h-[520px] sticky top-16 relative">
                        {allItems.map((item, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-500 ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <ShowcaseCard item={item} isVisible={activeIndex === index} />
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Show active card below */}
                    <div className="lg:hidden">
                        <div className="h-[350px] relative">
                            {allItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-500 ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                >
                                    <ShowcaseCard item={item} isVisible={activeIndex === index} />
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
