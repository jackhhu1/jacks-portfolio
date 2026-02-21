import { useState, useEffect } from 'react';
import anthropicLogo from '../assets/logos/Anthropic_logo.svg';
import elevenLabsLogo from '../assets/logos/elevenlabs.svg';
import googleLogo from '../assets/logos/image8-2.webp';
import unimelbLogo from '../assets/logos/unimelb-logo.jpg';
import deloitteLogo from '../assets/logos/Logo_of_Deloitte.svg.png';
import unYouthLogo from '../assets/logos/UN-Youth.png';
import eyParthenonLogo from '../assets/logos/EY_Parthenon_logo.svg.png';
import kearneyLogo from '../assets/logos/Kearney_Logo.svg.png';

// ─── LogoMarquee — scrolling "worked with/for" strip ─────────────────────────

const filterClasses = (dark) => dark
    ? "contrast-[1.2] invert mix-blend-screen"
    : "contrast-[1.2] mix-blend-multiply opacity-90";

const logos = [
    {
        name: "Anthropic",
        render: ({ dark }) => <img src={anthropicLogo} alt="Anthropic" className={`h-5 w-auto object-contain ${filterClasses(dark)}`} />
    },
    {
        name: "ElevenLabs",
        render: ({ dark }) => <img src={elevenLabsLogo} alt="ElevenLabs" className={`h-20 scale-125 w-auto object-contain ${filterClasses(dark)}`} />
    },
    {
        name: "Google",
        render: ({ dark }) => <img src={googleLogo} alt="Google" className={`h-10 scale-110 w-auto object-contain ${filterClasses(dark)}`} />
    },
    {
        name: "University of Melbourne",
        render: ({ dark }) => <img src={unimelbLogo} alt="University of Melbourne" className={`h-11 w-auto object-contain ${filterClasses(dark)}`} />
    },
    {
        name: "Deloitte",
        render: ({ dark }) => <img src={deloitteLogo} alt="Deloitte" className={`h-6 w-auto object-contain ${filterClasses(dark)}`} />
    },
    {
        name: "UN Youth Australia",
        render: ({ dark }) => <img src={unYouthLogo} alt="UN Youth Australia" className={`h-9 w-auto object-contain ${filterClasses(dark)}`} />
    },
    {
        name: "EY-Parthenon",
        render: ({ dark }) => <img src={eyParthenonLogo} alt="EY-Parthenon" className={`h-9 w-auto object-contain ${filterClasses(dark)}`} />
    },
    {
        name: "Kearney",
        render: ({ dark }) => <img src={kearneyLogo} alt="Kearney" className={`h-5 w-auto object-contain ${filterClasses(dark)}`} />
    },
];

// Triplicate for a seamless loop at any viewport width
const allLogos = [...logos, ...logos, ...logos];

const LogoMarquee = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const check = () => setDark(document.documentElement.classList.contains('dark'));
        check();
        const observer = new MutationObserver(check);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative py-12 overflow-hidden border-y border-gray-100 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
            {/* Section label */}
            <p className="text-center text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-600 mb-8 font-medium">
                Worked with &amp; for
            </p>

            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent" />

            {/* Scrolling track — animationDuration passed inline so Tailwind variant isn't needed */}
            <div className="flex overflow-hidden">
                <div
                    className="flex gap-16 items-center animate-marquee will-change-transform"
                    style={{ animationDuration: '60s' }}
                >
                    {allLogos.map((logo, i) => (
                        <div
                            key={i}
                            className="shrink-0 flex items-center opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default select-none"
                            title={logo.name}
                        >
                            {logo.render({ dark })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;
