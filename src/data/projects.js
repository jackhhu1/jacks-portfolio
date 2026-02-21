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
        id: "enactus",
        title: "Enactus",
        summary: "Led an organizational transformation for 70 members, tripling revenue ($25k -> $75k), boosting NPS 51 -> 90, and placing World Top 16.",
        tags: ["Social Entrepreneurship", "Leadership", "Non-Profit"],
        date: "2023 - 2024",
        featured: true,
        icon: null,
        iconImage: EnactusLogo,
        iconBg: "bg-yellow-400",
        accent: "from-yellow-400 to-yellow-600",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        content: {
            problem: "The university's Enactus chapter was struggling with low member engagement, fragmented project management, and stagnant revenue that limited the scale of social impact initiatives.",
            context: "As President, I inherited an organisation of 70 members running 5 social enterprise projects. Member NPS was at 51 and annual revenue sat at $25k — both well below national benchmarks.",
            constraints: "Volunteer-based workforce with high semester-to-semester turnover; zero operating budget at the start; competing priorities with members' academic workloads.",
            process: `
1. **Structural Overhaul**: Restructured the organisation from flat project silos into functional departments (Product, Marketing, Finance, People & Culture) to create clear ownership and career pathways.
2. **Revenue Strategy**: Launched a tiered sponsorship model and secured 3 new corporate partners by aligning social impact reporting with sponsors' ESG objectives.
3. **Culture & Retention**: Introduced a structured onboarding program, weekly retros, and an internal NPS tracking system to surface issues early and act on feedback.`,
            outcome: "Tripled annual revenue from $25k to $75k. Lifted member NPS from 51 to 90. Achieved the highest member retention rate in the chapter's history. The team went on to place World Top 16 at the Enactus World Cup.",
            lessons: "Leadership is about creating the conditions for others to succeed. Structuring volunteer teams like high-performance orgs doesn't kill culture — it amplifies it."
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
            problem: "The firm had a strong deal-sourcing engine but lacked a structured strategy product to help portfolio companies achieve post-acquisition value creation targets.",
            context: "Joined as Strategy Lead alongside the CEO to design and launch a new advisory product line from scratch — targeting mid-market private equity portfolio companies.",
            constraints: "Lean team of 3; needed to prove product-market fit while simultaneously closing deals; operating in a relationship-driven industry where trust takes time to build.",
            process: `
1. **Market Analysis**: Mapped the competitive landscape across 50+ advisory firms to identify an underserved niche — hands-on operational strategy for PE-backed companies in the $10M-$100M revenue range.
2. **Product Design**: Co-designed a 90-day strategy sprint framework combining data-driven diagnostics with embedded execution support.
3. **Go-to-Market**: Built a referral flywheel through LP networks, leveraging early wins as case studies to shorten the sales cycle.`,
            outcome: "Scaled the new product line from $0 to $400k ARR within 12 months. Contributed to closing $50M in aggregate deal value across portfolio companies in year one.",
            lessons: "In professional services, the product IS the team. Packaging expertise into repeatable frameworks is how you scale without diluting quality."
        }
    },
    {
        id: "kindling-labs",
        title: "Kindling Labs",
        summary: "Full product lifecycle development for software. Developed TMYS - more in pipeline",
        tags: ["Software Engineering", "Product", "R&D"],
        date: "2025-2026",
        featured: true,
        icon: null,
        iconImage: KindlingLogoPng,
        iconBg: "bg-neutral-800",
        accent: "from-blue-600 to-indigo-800",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        content: {
            problem: "Too many ideas die in the planning phase. There's a gap between 'interesting concept' and 'shipped product' that solo builders struggle to cross consistently.",
            context: "Founded Kindling Labs as a personal software studio — a framework for rapidly validating, building, and shipping software products from concept to live users.",
            constraints: "Solo developer bandwidth; need to balance speed with code quality; each product targets a different market with different tech requirements.",
            process: `
1. **The Build Framework**: Established a rule — if the core MVP can't be scoped to a weekend build, the idea needs to be decomposed further.
2. **Reusable Stack**: Built a modular boilerplate (Next.js, Supabase, Tailwind) that eliminates 80% of setup time across new projects.
3. **Ship & Learn Loops**: Each product ships to a real community within 48 hours of starting. Feedback drives iteration, not assumptions.`,
            outcome: "Successfully shipped 1 product to live users within the first month. 2 additional products are currently in active development with early user communities.",
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
            context: "Competed in a 36-hour hackathon hosted by Stanford University and Flower Labs, against ~200 participants including engineers from Meta, Apple, Google, Amazon, and IBM.",
            constraints: "36-hour time limit; team of 4 with mixed experience levels; had to build on the Flower federated learning framework; solution needed to be demo-ready and technically sound.",
            process: `
1. **Problem Scoping**: Spent the first 3 hours researching real-world applications of federated learning, then narrowed to privacy-preserving healthcare data analysis.
2. **Architecture Design**: Designed a system where hospitals could collaboratively train models without sharing patient data — using Flower for orchestration and a React dashboard for visualization.
3. **Execution Sprint**: Split the team into frontend/backend pairs, maintained a shared Notion doc for API contracts, and ran 4-hour sprint cycles with demos.`,
            outcome: "Won first place. Judges highlighted the clarity of the problem framing, the polish of the demo, and the practical applicability of the solution.",
            lessons: "Hackathons reward clarity of thought more than lines of code. The teams that articulate 'why this matters' always outperform the ones that just build features."
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
            process: `
1. **Quality Framework**: Developed internal rubrics for evaluating AI-generated outputs, scoring across dimensions like accuracy, helpfulness, harmlessness, and coherence.
2. **Feedback Loops**: Established rapid iteration cycles with client ML teams, translating vague model weaknesses into actionable data collection priorities.
3. **Scale & Consistency**: Trained and mentored a cohort of junior evaluators, creating calibration exercises and inter-rater reliability checks to maintain quality at scale.`,
            outcome: "Contributed to datasets used in training and evaluating frontier AI models. Maintained a 98%+ quality score across all client engagements. Recognized internally for establishing new quality benchmarks.",
            lessons: "The best AI systems are built on unglamorous, painstaking data work. Understanding data quality deeply gives you an edge in building and evaluating any AI product."
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
            process: `
1. **Audit & Strategy**: Conducted a full content audit across Instagram, LinkedIn, and Facebook. Identified that less than 10% of posts were driving 80% of engagement — all were student stories and behind-the-scenes content.
2. **Content Playbook**: Pivoted the content strategy from formal announcements to student-first storytelling. Created reusable templates and a content calendar managed through Notion.
3. **Event Promotion**: Redesigned the event marketing funnel — building anticipation through countdown content, ambassador programs, and post-event recap threads.`,
            outcome: "Grew social media engagement by 198% year-over-year. Events engaged 1,201+ students across the year. Built a content system that continued to perform after my tenure ended.",
            lessons: "Growth isn't about doing more — it's about doing the right things consistently. One great content format repeated weekly beats ten one-off campaigns."
        }
    },
    {
        id: "cadets",
        title: "Army Cadets Event Execution",
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
            process: `
1. **Planning Framework**: Developed comprehensive activity plans covering risk assessments, logistics matrices, training schedules, and contingency protocols — months in advance.
2. **Team Leadership**: Recruited, briefed, and managed teams of 30+ adult staff and senior cadets, running daily coordination meetings during activities.
3. **Execution & Adaptation**: Ran 4 major activities across the year, each spanning 8 days. Managed real-time decision-making for weather disruptions, medical situations, and schedule adjustments.`,
            outcome: "Successfully executed 4 statewide and national activities for 100-300+ attendees each. Achieved the highest cadet satisfaction scores in the unit's recent history. Zero critical safety incidents.",
            lessons: "Planning is everything, but the plan is nothing — the ability to adapt in real-time while keeping 300 people safe and engaged is the real skill."
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
            process: "",
            outcome: "",
            lessons: "Just hit apply"
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
            process: `
1. **Planning Framework**: Developed comprehensive activity plans covering risk assessments, logistics matrices, training schedules, and contingency protocols — months in advance.
2. **Team Leadership**: Recruited, briefed, and managed teams of 30+ adult staff and senior cadets, running daily coordination meetings during activities.
3. **Execution & Adaptation**: Ran 4 major activities across the year, each spanning 8 days. Managed real-time decision-making for weather disruptions, medical situations, and schedule adjustments.`,
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
            process: `
1. **Planning Framework**: Developed comprehensive activity plans covering risk assessments, logistics matrices, training schedules, and contingency protocols — months in advance.
2. **Team Leadership**: Recruited, briefed, and managed teams of 30+ adult staff and senior cadets, running daily coordination meetings during activities.
3. **Execution & Adaptation**: Ran 4 major activities across the year, each spanning 8 days. Managed real-time decision-making for weather disruptions, medical situations, and schedule adjustments.`,
            outcome: "Successfully executed 4 statewide and national activities for 100-300+ attendees each. Achieved the highest cadet satisfaction scores in the unit's recent history. Zero critical safety incidents.",
            lessons: "Planning is everything, but the plan is nothing — the ability to adapt in real-time while keeping 300 people safe and engaged is the real skill."
        }
    },
];
