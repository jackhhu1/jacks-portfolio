import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Globe, Gamepad2 } from 'lucide-react';
import KindlingLogoPng from '../assets/KindlingLogo.png';

// ─── Logo imports for marquee ────────────────────────────────────
import anthropicLogo from '../assets/logos/Anthropic_logo.svg';
import elevenLabsLogo from '../assets/logos/elevenlabs.svg';
import googleLogo from '../assets/logos/image8-2.webp';
import unimelbLogo from '../assets/logos/unimelb-logo.jpg';
import deloitteLogo from '../assets/logos/Logo_of_Deloitte.svg.png';
import unYouthLogo from '../assets/logos/UN-Youth.png';
import eyParthenonLogo from '../assets/logos/EY_Parthenon_logo.svg.png';
import kearneyLogo from '../assets/logos/Kearney_Logo.svg.png';

// ─── Uploaded showcase images ────────────────────────────────────
import stanfordHackathonImg from '../assets/stanford-flower.jpg';
import top100Img from '../assets/top100.jpg';
import enactusImg from '../assets/enactus-worldcup.jpg';

// ─── All showcase items: intro (0-2) then "what else" (3+) ──────
const allItems = [
    // ── Intro phrases ───────────────────────────────────────────
    {
        text: 'A competitive builder.',
        tag: 'Sport',
        title: 'Semi-Professional Soccer Player',
        description: 'Competed at semi-professional level as a goalkeeper despite being short. Built discipline, resilience, and a competitive edge that carries into everything else.',
        link: 'https://fminside.net/players/7-fm-26/2000256392-jack-hu',
        linkLabel: 'Find me on Football Manager',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        text: 'Built products from scratch.',
        tag: 'Software Studio',
        title: 'Kindling Labs',
        description: 'Founded a software studio focused on consumer mobile apps. Shipped Tell Me Your Story to live users within a month. Selected for a mentorship program run by the top ANZ VC. 2 additional products in active development.',
        link: 'https://tellmeyourstory.app',
        linkLabel: 'Try Tell Me Your Story',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        text: 'Scaled organisations.',
        tag: 'Leadership',
        title: 'Enactus President',
        description: 'Inherited an organisation with 50%+ churn. Tripled revenue ($25k → $75k), lifted NPS from 51 → 90, and achieved highest retention in chapter history (10+ years). Placed World Top 16 at the Enactus World Cup.',
        image: enactusImg,
    },
    // ── "What else" phrases ─────────────────────────────────────
    {
        text: 'Win a Stanford AI hackathon.',
        tag: 'AI / Product',
        title: 'Stanford x Flower Hackathon',
        description: 'Named winner at a 12-hour hackathon hosted by Stanford University and Flower Labs. Competed solo against ~200 participants including engineers from Meta, Apple, Google, students from Stanford, Berkeley, CMU, as well as 500 Global Founders.',
        link: 'https://flower.ai/blog/2025-10-22-decentralized-hackathon-sf-winners/',
        linkLabel: 'Read about it',
        image: stanfordHackathonImg,
    },
    {
        text: 'Curate data for frontier AI labs.',
        tag: 'AI / Engineering',
        title: 'AI Data Specialist',
        description: 'Oversaw data quality for training and evaluating frontier models at labs. Clients include Anthropic, Google, and Eleven Labs. Identified as a top performer across engagements.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        text: 'Scale a PE advisory product 0 → $400k ARR.',
        tag: 'Product Strategy',
        title: 'Caprae Capital',
        description: 'Promoted to strategy lead (top performer in a cohort of 50+ from Harvard, MIT, Yale etc.). Worked directly with CEO to grow a new product line from $0 to $400k ARR in 9 months, contributing to $50M in deal value.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        text: 'Present research at an international conference.',
        tag: 'Research',
        title: 'International Conference Speaker',
        description: 'Selected as 1 of 5 students globally to present an abstract at the Enactus Global Research Network international conference.',
        link: 'https://www.enactusaustralia.org.au/wp-content/uploads/2025/09/EGRN2024compendium.pdf',
        linkLabel: 'Find the abstract',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
    {
        text: 'Selected as one of the top 100 future leaders nationally.',
        tag: 'Recognition',
        title: 'AFR Top 100 Future Leaders',
        description: 'Selected by Gradconnection and the Australian Financial Review as one of 100 impactful young Australians for building resilient communities.',
        image: top100Img,
    },
];

const INTRO_COUNT = 3;

// ─── Marquee logos ───────────────────────────────────────────────
const logos = [
    { name: "Anthropic", src: anthropicLogo, h: "h-5", filter: "brightness(0) invert(1)" },
    { name: "ElevenLabs", src: elevenLabsLogo, h: "h-16 scale-110", filter: "brightness(0) invert(1)" },
    { name: "Google", src: googleLogo, h: "h-9 scale-110", filter: "grayscale(1) brightness(2) contrast(0.9)" },
    { name: "University of Melbourne", src: unimelbLogo, h: "h-10", filter: "grayscale(1) brightness(2)" },
    { name: "Deloitte", src: deloitteLogo, h: "h-5", filter: "grayscale(1) brightness(1.7)" },
    { name: "UN Youth Australia", src: unYouthLogo, h: "h-8", filter: "grayscale(1) brightness(2)" },
    { name: "EY-Parthenon", src: eyParthenonLogo, h: "h-8", filter: "grayscale(1) brightness(2)" },
    { name: "Kearney", src: kearneyLogo, h: "h-5", filter: "brightness(0) invert(1)" },
];
const marqueeLogos = [...logos, ...logos, ...logos];

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

// ─── Hoverable phrase helper ─────────────────────────────────────
const HoverPhrase = ({ text, index, activeIndex, hasInteracted, onHover }) => (
    <span
        onMouseEnter={() => onHover(index)}
        className={`inline cursor-default transition-colors duration-300 ${activeIndex === index
            ? 'text-white'
            : hasInteracted
                ? 'text-white/20 hover:text-white/50'
                : 'text-white/25 hover:text-white/50'
            }`}
    >
        {text}{' '}
    </span>
);

// ─── Main Page ───────────────────────────────────────────────────
const A16Z = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);

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

    const elseItems = allItems.slice(INTRO_COUNT);

    return (
        <div className="a16z-page min-h-screen bg-[#070707] text-white selection:bg-[#00A3FF]/30 flex flex-col">
            {/* Subtle ambient glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[50vw] h-[35vh] bg-gradient-to-br from-[#00A3FF]/[0.03] via-transparent to-transparent rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[25vh] bg-gradient-to-tr from-[#00A3FF]/[0.02] to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16 flex-1 flex flex-col">

                {/* ── Header ── */}
                <header className="mb-12 md:mb-16">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] animate-pulse" />
                        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
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
                            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6">
                                <span className="text-[#00A3FF]">Jack Hu</span>
                            </h1>
                            <p className="text-xl md:text-[1.35rem] lg:text-[1.5rem] font-medium leading-[1.35] tracking-tight">
                                <HoverPhrase text="As a competitive" index={0} activeIndex={activeIndex} hasInteracted={hasInteracted} onHover={handleHover} />
                                <span className="text-white/20"> builder trained at Unimelb and UIUC, I've </span>
                                <HoverPhrase text="built products from scratch" index={1} activeIndex={activeIndex} hasInteracted={hasInteracted} onHover={handleHover} />
                                <span className="text-white/20">and </span>
                                <HoverPhrase text="scaled communities to worldwide recognition." index={2} activeIndex={activeIndex} hasInteracted={hasInteracted} onHover={handleHover} />
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
                                        <HoverPhrase
                                            key={globalIndex}
                                            text={item.text}
                                            index={globalIndex}
                                            activeIndex={activeIndex}
                                            hasInteracted={hasInteracted}
                                            onHover={handleHover}
                                        />
                                    );
                                })}
                                <a
                                    href="/a16z/projects"
                                    className="inline text-[#00A3FF]/80 hover:text-[#00A3FF] transition-colors duration-300 underline underline-offset-4 decoration-[#00A3FF]/30 hover:decoration-[#00A3FF]/70"
                                >
                                    And more.
                                </a>
                            </p>
                        </div>

                        {/* Bottom: Socials + Status */}
                        <div className="flex items-center gap-6 mt-12 mb-12">
                            <a href="mailto:jackhhu1@gmail.com" className="text-white/20 hover:text-[#00A3FF] transition-colors" aria-label="Email">
                                <Mail size={18} />
                            </a>
                            <a href="https://github.com/jackhhu" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#00A3FF] transition-colors" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="https://linkedin.com/in/jackhu" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#00A3FF] transition-colors" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>

                            {/* Kindling Labs status */}
                            <a
                                href="https://tellmeyourstory.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-auto flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity"
                            >
                                <div className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[11px] font-medium text-white/50 tracking-wide">Currently</span>
                                    <img src={KindlingLogoPng} alt="Kindling Labs" className="h-4 w-4 rounded-sm" />
                                    <span className="text-[11px] font-medium text-white/80 tracking-wide">Kindling Labs</span>
                                </div>
                            </a>
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

            {/* ── Scrolling logo marquee — "Worked with & for" ── */}
            <div className="relative z-10 py-10 overflow-hidden border-t border-white/[0.06]">
                <p className="text-center text-[10px] uppercase tracking-[0.25em] text-white/20 mb-6 font-medium">
                    Worked with &amp; for
                </p>

                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#070707] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#070707] to-transparent" />

                {/* Scrolling track */}
                <div className="flex overflow-hidden">
                    <div
                        className="flex gap-16 items-center animate-marquee will-change-transform"
                        style={{ animationDuration: '50s' }}
                    >
                        {marqueeLogos.map((logo, i) => (
                            <div
                                key={i}
                                className="shrink-0 flex items-center opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-default select-none"
                                title={logo.name}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className={`${logo.h} w-auto object-contain`}
                                    style={{
                                        filter: logo.filter,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default A16Z;
