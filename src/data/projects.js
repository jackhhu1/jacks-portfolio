import KindlingLogoPng from '../assets/KindlingLogo.png';
import EnactusLogo from '../assets/enactusLogo.png';
import CapraeLogo from '../assets/caprae_capital_logo.jpeg';

// Tag color mapping — subtle, outlined pills per tag
// Used by both Projects.jsx and ProjectDetail.jsx
export const tagColors = {
    // Strategy & Business
    "Strategy": { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
    "Leadership": { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
    "Private Equity": { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },

    // Social & Community
    "Social Entrepreneurship": { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20" },
    "Non-Profit": { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20" },
    "Community": { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },

    // Tech & Engineering
    "Software Engineering": { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
    "Product": { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" },
    "AI": { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
    "Engineering": { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20" },
    "R&D": { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/20" },
    "Design": { bg: "bg-fuchsia-500/10", text: "text-fuchsia-400", border: "border-fuchsia-500/20" },

    // Ops & Growth
    "Social Media": { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20" },
    "Growth": { bg: "bg-lime-500/10", text: "text-lime-400", border: "border-lime-500/20" },
    "Operations": { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
    "Logistics": { bg: "bg-stone-500/10", text: "text-stone-400", border: "border-stone-500/20" },
};

// Default tag color
export const defaultTagColor = { bg: "bg-neutral-500/10", text: "text-neutral-400", border: "border-neutral-500/20" };

// Helper to get tag color
export const getTagColor = (tag) => tagColors[tag] || defaultTagColor;

export const projects = [
    {
        id: "kindling-labs",
        title: "Kindling Labs",
        summary: "Full product lifecycle development for software. Focus on consumer mobile applications",
        tags: ["Software Engineering", "Product", "R&D"],
        date: "2025-2026",
        featured: true,
        icon: null,
        iconImage: KindlingLogoPng,
        iconBg: "bg-neutral-800",
        accent: "from-blue-600 to-indigo-800",
        link: "https://tellmeyourstory.app",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        content: {
            problem: "1: Intergenerational relationships, especially across borders and languages. 2: Household food waste. 3: Grassroots soccer analytics accessibility.",
            context: "Founded Kindling Labs as a software studio - a framework for rapidly validating, building, and shipping software products from concept to live users.",
            constraints: "Solo developer bandwidth; need to balance speed with code quality; each product targets a different market with different tech requirements. User insights take time to collect.",
            process: "🚧 **Under construction.**",
            outcome: "Selected for a mentorship program run by a top VC in Australia. Shipped 1 product to live users within the first month. 2 additional products are currently in active development with early user communities.",
            lessons: "Perfection is the enemy of shipping. The fastest way to learn is to put something real in front of real people and iterate from there."
        }
    },
    {
        id: "hackathon",
        title: "Stanford x Flower Hackathon Winner",
        summary: "Competed against ~200 attendees including professionals from Meta, Apple, Google, Amazon.",
        tags: ["Product", "AI", "Design"],
        date: "2025",
        featured: false,
        icon: "🏆",
        iconBg: "bg-purple-500/15",
        accent: "from-purple-600 to-pink-600",
        content: {
            problem: "Federated learning remains largely inaccessible to non-ML practitioners. The challenge was to build a practical, user-friendly application leveraging Flower's federated learning framework.",
            context: "Competed in a 12-hour hackathon hosted by Stanford University and Flower Labs, against ~200 participants including engineers from Meta, Apple, Google, Amazon, and IBM.",
            constraints: "12-hour time limit; solo hacker; had to build on the Flower federated learning framework; solution needed to be demo-ready and technically sound.",
            process: "🚧 **Under construction.**",
            outcome: "Named as a winner. Judges highlighted the clarity of the problem framing, the polish of the demo, and the practical applicability of the solution.",
            lessons: "Clarity of thought matters more than lines of code. The teams that can demonstrate 'why this matters' always outperform the ones that just build features."
        }
    },
    {
        id: "ai",
        title: "AI Data Specialist",
        summary: "Oversaw data quality for a leading AI lab, clients include Anthropic, Google, Eleven Labs and more.",
        tags: ["Product", "AI", "Engineering"],
        date: "2025-2026",
        featured: false,
        icon: "🤖",
        iconBg: "bg-cyan-500/15",
        accent: "from-cyan-500 to-blue-700",
        content: {
            problem: "AI model performance is bottlenecked by data quality. Leading AI labs needed rigorous, human-in-the-loop data curation to improve model outputs across reasoning, coding, and creative tasks.",
            context: "Worked as a Data Quality Specialist for a firm contracted by top-tier AI labs — including Anthropic, Google, and Eleven Labs — to produce high-quality training and evaluation datasets.",
            constraints: "Strict confidentiality requirements across all client engagements; had to maintain consistency across diverse task types (code generation, creative writing, factual Q&A); tight turnaround deadlines with zero tolerance for quality drops.",
            process: "🚧 **Under construction.**",
            outcome: "Contributed to datasets used in training and evaluating frontier AI models. Maintained a 98%+ quality score across all client engagements. Recognized internally for establishing new quality benchmarks.",
            lessons: "The best AI systems are built on unglamorous, painstaking data work. Understanding data quality deeply gives you an edge in building and evaluating any AI product."
        }
    },
    {
        id: "caprae",
        title: "Caprae Capital",
        summary: "Scaled a new product line alongside CEO from 0->400k ARR. We helped close $50M worth of deals in the first year.",
        tags: ["Strategy", "Private Equity", "Leadership"],
        date: "2024 - 2025",
        featured: true,
        icon: null,
        iconImage: CapraeLogo,
        iconBg: "bg-black",
        accent: "from-neutral-900 to-black",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        content: {
            problem: "There was strong demand for the services, however the internal infrastructure lacked ability to scale while maintaining high quality outputs.",
            context: "Joined as an intern, however was promoted to strategy lead after being identified as a top performer in a cohort of 50+ students including students from Harvard, MIT, Yale etc. As strategy lead I worked directly with the CEO to grow and optimize a new product line.",
            constraints: "Operating in a relationship-driven industry where trust takes time to build.",
            process: "🚧 **Under construction.**",
            outcome: "Scaled the new product line from $0 to $400k ARR within 9 months. Contributed to closing $50M in aggregate deal value across clients in year one.",
            lessons: "Under construction"
        }
    },
    {
        id: "enactus",
        title: "Enactus",
        summary: "Led an organizational transformation for 70 members, tripling revenue ($25k -> $75k), boosting NPS 51 -> 90, and placing World Top 16.",
        tags: ["Social Impact", "Leadership", "Non-Profit"],
        date: "2023 - 2024",
        featured: true,
        icon: null,
        iconImage: EnactusLogo,
        iconBg: "bg-yellow-400",
        accent: "from-yellow-400 to-yellow-600",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        content: {
            problem: "The university's Enactus chapter was struggling with low member engagement, fragmented project management, and stagnant revenue that limited the scale of social impact initiatives.",
            context: "As President, I inherited an organisation of 50 members running 3 social enterprise projects. Member NPS was at 51 and with a 50%+ churn rate.",
            constraints: "Volunteer-based workforce with high semester-to-semester turnover; zero operating budget at the start; competing priorities with members' academic workloads.",
            process: "🚧 **Under construction.**",
            outcome: "Tripled annual revenue from $25k to $75k. Lifted member NPS from 51 to 90. Achieved the highest member retention rate in the chapter's history. The team went on to place World Top 16 at the Enactus World Cup.",
            lessons: "Leadership is about creating the conditions for others to succeed. Structuring volunteer teams like high-performance orgs doesn't kill culture — it amplifies it."
        }
    },
    {
        id: "doordash-case-comp",
        title: "National Case Competition",
        summary: "Runner up against 232 teams. Advised Doordash on new vertical expansion.",
        tags: ["Strategy", "Operations", "Logistics"],
        date: "2023",
        featured: false,
        icon: "🍔",
        iconBg: "bg-red-500/15",
        accent: "from-red-500 to-orange-600",
        link: "https://drive.google.com/file/d/1GGEy0pLVbSXuQXEwExyLXOSRe2ZLIgUW/view?usp=sharing",
        content: {
            problem: "DoorDash sought innovative growth and operational strategies to enhance market share and profitability through new vertical expansion.",
            context: "Competed in the FMAA x DoorDash Management National Case Competition, presenting strategic and operational recommendations in 3 rounds leading to the national final.",
            constraints: "Strict time constraints to analyze a detailed business case, develop actionable solutions, and refine a pitch deck.",
            process: "🚧 **Under construction.**",
            outcome: "Finished as runner ups against 232 teams.",
            lessons: "Clear, structured storytelling is essential to communicate complex operational metrics to executive stakeholders effectively."
        }
    },
    {
        id: "AFR",
        title: "AFR Top 100 Future Leaders",
        summary: "Selected as one of 100 future leaders in Australia for building resilient communities",
        tags: ["Leadership", "Recognition"],
        date: "2024",
        featured: false,
        icon: "⭐",
        iconBg: "bg-stone-500/15",
        accent: "from-stone-600 to-neutral-800",
        content: {
            problem: "N/A",
            context: "Selected by Gradconnection and Australian Financial Review to determine impactful young Australians",
            constraints: "N/A",
            process: "🚧 **Under construction.**",
            outcome: "",
            lessons: "Just hit apply"
        }
    },
    {
        id: "enactus-global-research",
        title: "International Conference Speaker",
        summary: "Presented an abstract. 1 of 5 students selected globally.",
        tags: ["Recognition"],
        date: "2024",
        featured: false,
        icon: "🌍",
        iconBg: "bg-emerald-500/15",
        accent: "from-emerald-500 to-teal-600",
        content: {
            problem: "N/A",
            context: "Enactus Global Research Network",
            constraints: "N/A",
            process: "🚧 **Under construction.**",
            outcome: "Selected as one of 5 students globally to present an abstract at the international conference.",
            lessons: "🚧 **Under construction.**"
        }
    },
    {
        id: "dav-debating",
        title: "DAV A-Grade Debating",
        summary: "State Semi-Finalist for the largest english debating competion in the world (Undefeated 9 rounds).",
        tags: ["Recognition", "Community"],
        date: "2021",
        featured: false,
        icon: "🎙️",
        iconBg: "bg-blue-500/15",
        accent: "from-blue-500 to-indigo-600",
        content: {
            problem: "N/A",
            context: "Competed in the DAV A-Grade Debating competition, the largest english debating competition in the world.",
            constraints: "N/A",
            process: "🚧 **Under construction.**",
            outcome: "Reached the State Semi-Finals going undefeated for 9 rounds, before losing to the eventual winners in a split decision.",
            lessons: "🚧 **Under construction.**"
        }
    },
    {
        id: "growth-unyouth",
        title: "UN Youth Growth",
        summary: "Grew social media engagement 198%, engaged 1201+ students in events.",
        tags: ["Social Media", "Growth", "Operations"],
        date: "2023",
        featured: false,
        icon: "🌍",
        iconBg: "bg-sky-500/15",
        accent: "from-sky-500 to-blue-600",
        content: {
            problem: "UN Youth Victoria had strong programs but low visibility. Social media engagement was flat, event attendance was declining, and the brand wasn't reaching its target demographic of 15-25 year olds effectively.",
            context: "Took on the External Communications Lead role to overhaul the organisation's digital presence and drive event participation across Victoria.",
            constraints: "Zero marketing budget; entirely volunteer content creation team; needed to maintain the UN's brand guidelines while appealing to a younger, social-media-native audience.",
            process: "🚧 **Under construction.**",
            outcome: "Grew social media engagement by 198% year-over-year. Events engaged 1,201+ students across the year. Built a content system that continued to perform after my tenure ended.",
            lessons: "Growth isn't about doing more — it's about doing the right things consistently. One great content format repeated weekly beats ten one-off campaigns."
        }
    },
    {
        id: "cadets",
        title: "Senior Cadet Commander",
        summary: "Led a state of 3250 youth, ran 4 statewide and national activities for 100-300+ attendees over 8 days (each).",
        tags: ["Community", "Logistics", "Operations"],
        date: "2022",
        featured: false,
        icon: "🛡️",
        iconBg: "bg-stone-500/15",
        accent: "from-stone-600 to-neutral-800",
        content: {
            problem: "Large-scale youth activities (100-300+ attendees over 8 days) require military-grade logistics planning. Previous events suffered from poor coordination, inconsistent safety standards, and low cadet satisfaction scores.",
            context: "Served in a senior leadership role within the Australian Army Cadets, responsible for planning and executing statewide and national activities across a state of 3,250 youth members.",
            constraints: "Operating under strict Defence Force safety and governance protocols; coordinating across 30+ adult volunteers and instructors; managing logistics for remote training locations with limited infrastructure.",
            process: "🚧 **Under construction.**",
            outcome: "Successfully executed 4 statewide and national activities for 100-300+ attendees each. Achieved the highest cadet satisfaction scores in the unit's recent history. Zero critical safety incidents.",
            lessons: "Planning is everything, but the plan is nothing — the ability to adapt in real-time while keeping 300 people safe and engaged is the real skill."
        }
    },
    {
        id: "rotary-club",
        title: "Co-President of Rotary Club",
        summary: "Raised $10k for community projects.",
        tags: ["Community", "Leadership", "Non-Profit"],
        date: "2021",
        featured: false,
        icon: "🤝",
        iconBg: "bg-yellow-500/15",
        accent: "from-yellow-500 to-amber-600",
        content: {
            problem: "N/A",
            context: "Served as Co-President of the Rotary Club.",
            constraints: "N/A",
            process: "🚧 **Under construction.**",
            outcome: "Raised $10k for community projects.",
            lessons: "🚧 **Under construction.**"
        }
    },
    {
        id: "sports",
        title: "Coaching High Level Youth Sport",
        summary: "Across soccer, tennis and athletics, I led 3 undefeated teams",
        tags: ["Community", "Leadership", "Operations"],
        date: "2022-2025",
        featured: false,
        icon: "🏆",
        iconBg: "bg-stone-500/15",
        accent: "from-stone-600 to-neutral-800",
        content: {
            problem: "  Large-scale youth activities (100-300+ attendees over 8 days) require military-grade logistics planning. Previous events suffered from poor coordination, inconsistent safety standards, and low cadet satisfaction scores.",
            context: "Served in a senior leadership role within the Australian Army Cadets, responsible for planning and executing statewide and national activities across a state of 3,250 youth members.",
            constraints: "Operating under strict Defence Force safety and governance protocols; coordinating across 30+ adult volunteers and instructors; managing logistics for remote training locations with limited infrastructure.",
            process: "🚧 **Under construction.**",
            outcome: "Successfully executed 4 statewide and national activities for 100-300+ attendees each. Achieved the highest cadet satisfaction scores in the unit's recent history. Zero critical safety incidents.",
            lessons: "Planning is everything, but the plan is nothing — the ability to adapt in real-time while keeping 300 people safe and engaged is the real skill."
        }
    },
    {
        id: "soccer",
        title: "Semi-Professional Soccer Player",
        summary: "",
        tags: ["Community", "Leadership", "Operations"],
        date: "2023",
        featured: false,
        icon: "⚽",
        iconBg: "bg-stone-500/15",
        accent: "from-stone-600 to-neutral-800",
        content: {
            problem: "  Large-scale youth activities (100-300+ attendees over 8 days) require military-grade logistics planning. Previous events suffered from poor coordination, inconsistent safety standards, and low cadet satisfaction scores.",
            context: "Served in a senior leadership role within the Australian Army Cadets, responsible for planning and executing statewide and national activities across a state of 3,250 youth members.",
            constraints: "Operating under strict Defence Force safety and governance protocols; coordinating across 30+ adult volunteers and instructors; managing logistics for remote training locations with limited infrastructure.",
            process: "🚧 **Under construction.**",
            outcome: "Successfully executed 4 statewide and national activities for 100-300+ attendees each. Achieved the highest cadet satisfaction scores in the unit's recent history. Zero critical safety incidents.",
            lessons: "Planning is everything, but the plan is nothing — the ability to adapt in real-time while keeping 300 people safe and engaged is the real skill."
        }
    },
    {
        id: "taiwan-cycle",
        title: "Cycled 900km around Taiwan",
        summary: "Completed a 900km cycling route around Taiwan in 10 days with no prior training.",
        tags: ["Sport", "Community"],
        date: "2025",
        featured: false,
        icon: "🚴",
        iconBg: "bg-emerald-500/15",
        accent: "from-emerald-600 to-green-800",
        content: {
            problem: "N/A",
            context: "Decided to cycle around the circumference of Taiwan (900km) in 10 days without any prior cycling training.",
            constraints: "No prior training, tight 10 day schedule, physical exhaustion.",
            process: "🚧 **Under construction.**",
            outcome: "Successfully completed the 900km circuit in 10 days.",
            lessons: "Resilience and sheer willpower can compensate for a lack of preparation, though it's much more painful."
        }
    },
    {
        id: "national-hackathon",
        title: "National Student Hackathon",
        summary: "Ran a national hackathon with universities across Australia, securing $20k in sponsorship.",
        tags: ["Operations", "Community", "Leadership"],
        date: "2023",
        featured: false,
        icon: "💻",
        iconBg: "bg-blue-500/15",
        accent: "from-blue-600 to-indigo-800",
        content: {
            problem: "N/A",
            context: "Organized and ran a national-level hackathon involving multiple universities across Australia.",
            constraints: "Coordinating across different states and universities; securing funding and sponsorships.",
            process: "🚧 **Under construction.**",
            outcome: "Secured $20k in sponsorship funding and successfully ran the event with high student participation across the country.",
            lessons: "Cross-university collaboration requires clear communication and strong incentive alignment for sponsors."
        }
    },
    {
        id: "enactus-innovative",
        title: "Most Innovative Student Award",
        summary: "Awarded Most Innovative Student by Enactus Australia.",
        tags: ["Recognition", "Social Impact"],
        date: "2024",
        featured: false,
        icon: "💡",
        iconBg: "bg-yellow-500/15",
        accent: "from-yellow-400 to-orange-500",
        content: {
            problem: "N/A",
            context: "Recognized for innovative contributions to social enterprise projects during my time at Enactus.",
            constraints: "N/A",
            process: "🚧 **Under construction.**",
            outcome: "Received the Most Innovative Student Award from Enactus Australia.",
            lessons: "Innovation in the non-profit sector is about applying business frameworks to solve social problems in sustainable ways."
        }
    }
];
