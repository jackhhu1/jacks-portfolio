import { useState, useEffect } from 'react';

// ─── LogoMarquee — scrolling "worked with/for" strip ─────────────────────────
// Logos are rendered as inline SVG wordmarks so they look crisp in both
// light and dark mode without any external image dependencies.

const logos = [
    {
        name: "Anthropic",
        render: ({ dark }) => (
            <svg viewBox="0 0 120 30" fill="none" className="h-6 w-auto" aria-label="Anthropic">
                <text
                    x="0" y="23"
                    fontFamily="'Georgia', serif"
                    fontSize="21"
                    fontWeight="500"
                    fill={dark ? "#d1d5db" : "#1f2937"}
                    letterSpacing="-0.5"
                >Anthropic</text>
            </svg>
        ),
    },
    {
        name: "ElevenLabs",
        render: ({ dark }) => (
            <svg viewBox="0 0 130 30" fill="none" className="h-6 w-auto" aria-label="ElevenLabs">
                <text
                    x="0" y="23"
                    fontFamily="'Inter', 'Helvetica Neue', sans-serif"
                    fontSize="20"
                    fontWeight="700"
                    fill={dark ? "#d1d5db" : "#111827"}
                    letterSpacing="-0.5"
                >ElevenLabs</text>
            </svg>
        ),
    },
    {
        name: "Google",
        render: () => (
            <svg viewBox="0 0 76 26" className="h-6 w-auto" aria-label="Google">
                <path d="M9.24 13c0-.52-.04-1.02-.12-1.5H4.5v2.84h2.66c-.11.6-.46 1.11-.97 1.45v1.2h1.57c.92-.85 1.48-2.1 1.48-3.99z" fill="#4285F4" />
                <path d="M4.5 17.5c1.34 0 2.46-.44 3.28-1.2l-1.57-1.2c-.44.3-1.01.47-1.71.47-1.31 0-2.42-.88-2.82-2.07H.06v1.24C.88 16.5 2.57 17.5 4.5 17.5z" fill="#34A853" />
                <path d="M1.68 13.5a3.75 3.75 0 010-2.5V9.76H.06a6 6 0 000 5.48l1.62-1.24z" fill="#FBBC05" />
                <path d="M4.5 8.93c.74 0 1.4.25 1.92.75l1.43-1.43A5.94 5.94 0 004.5 6.5C2.57 6.5.88 7.5.06 9l1.62 1.24c.4-1.2 1.51-2.07 2.82-2.07v-.24z" fill="#EA4335" />
                <text x="14" y="19" fontFamily="'Arial', sans-serif" fontSize="15" fontWeight="400" fill="#5f6368">Google</text>
            </svg>
        ),
    },
    {
        name: "University of Melbourne",
        render: ({ dark }) => (
            <div className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" className="h-6 w-6 shrink-0" aria-hidden="true">
                    <rect width="20" height="20" rx="3" fill="#003087" />
                    <text x="10" y="15" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#F5A623" fontFamily="serif">M</text>
                </svg>
                <svg viewBox="0 0 168 20" className="h-4 w-auto" aria-label="University of Melbourne">
                    <text x="0" y="15" fontFamily="'Georgia', serif" fontSize="13" fontWeight="600" fill={dark ? "#d1d5db" : "#003087"} letterSpacing="0.1">University of Melbourne</text>
                </svg>
            </div>
        ),
    },
    {
        name: "Deloitte",
        render: ({ dark }) => (
            <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 90 28" className="h-6 w-auto" aria-label="Deloitte">
                    <text x="0" y="22" fontFamily="'Arial', sans-serif" fontSize="21" fontWeight="700" fill={dark ? "#d1d5db" : "#1a1a1a"} letterSpacing="-0.3">Deloitte</text>
                </svg>
                <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" style={{ marginBottom: '2px' }} />
            </div>
        ),
    },
    {
        name: "UN Youth Australia",
        render: ({ dark }) => (
            <div className="flex items-center gap-2">
                <svg viewBox="0 0 22 22" className="h-6 w-6 shrink-0" aria-hidden="true">
                    <circle cx="11" cy="11" r="11" fill="#009EDB" />
                    <text x="11" y="15.5" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="sans-serif">UN</text>
                </svg>
                <svg viewBox="0 0 150 20" className="h-4 w-auto" aria-label="UN Youth Australia">
                    <text x="0" y="15" fontFamily="'Arial', sans-serif" fontSize="13" fontWeight="600" fill={dark ? "#d1d5db" : "#1f2937"}>UN Youth Australia</text>
                </svg>
            </div>
        ),
    },
    {
        name: "EY-Parthenon",
        render: ({ dark }) => (
            <div className="flex items-center gap-2">
                <svg viewBox="0 0 34 22" className="h-6 w-auto shrink-0" aria-hidden="true">
                    <rect width="34" height="22" rx="2" fill="#FFE600" />
                    <text x="17" y="16" textAnchor="middle" fontSize="13" fontWeight="900" fill="#1a1a1a" fontFamily="Arial, sans-serif">EY</text>
                </svg>
                <svg viewBox="0 0 90 20" className="h-4 w-auto" aria-label="EY-Parthenon">
                    <text x="0" y="15" fontFamily="'Arial', sans-serif" fontSize="13" fontWeight="600" fill={dark ? "#d1d5db" : "#1f2937"}>Parthenon</text>
                </svg>
            </div>
        ),
    },
    {
        name: "Kearney",
        render: ({ dark }) => (
            <svg viewBox="0 0 100 30" className="h-6 w-auto" aria-label="Kearney">
                <text x="0" y="23" fontFamily="'Georgia', serif" fontSize="21" fontWeight="700" fill={dark ? "#d1d5db" : "#1a1a1a"} letterSpacing="-0.3">Kearney</text>
            </svg>
        ),
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
                    style={{ animationDuration: '32s' }}
                >
                    {allLogos.map((logo, i) => (
                        <div
                            key={i}
                            className="shrink-0 flex items-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default select-none"
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
