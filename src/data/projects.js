export const projects = [
    {
        id: "enactus",
        title: "Enactus",
        summary: "Led a team of 150+ students to build sustainable social enterprises, generating $50k+ in revenue.",
        tags: ["Social Entrepreneurship", "Leadership", "Non-Profit"],
        date: "2023 - Present",
        content: {
            problem: "Student-led social enterprises often struggle with continuity and scalability due to high member turnover and lack of structured business models.",
            context: "As President of the Enactus chapter, I led a multidisciplinary team of 150+ students across 5 distinct impact projects.",
            constraints: "Zero initial funding; volunteer-based workforce; need to balance social impact with financial sustainability.",
            process: `
1. **Structural Overhaul**: Restructured the organization into functional departments (Product, Marketing, Finance) rather than just project silos.
2. **Partnership Strategy**: Secured corporate sponsorships and mentorships to professionalize our approach.
3. **Training Pipeline**: Implemented a 'social innovation incubator' curriculum to train new members.`,
            outcome: "Grew membership by 50%. Projects generated $50k+ in revenue. Recognized as a National Champion team.",
            lessons: "Leadership is about creating an environment where others can succeed. Structure enables creativity in volunteer teams."
        }
    },
    {
        id: "caprae",
        title: "Caprae",
        summary: "Established a sustainable outdoor apparel brand from zero to international launch in 3 countries.",
        tags: ["Brand Strategy", "DTC", "Sustainability"],
        date: "2023",
        content: {
            problem: "The outdoor apparel market is saturated with synthetic materials. There was a gap for high-performance, purely organic gear that didn't compromise on aesthetics.",
            context: "Co-founded Caprae to bring a new philosophy of 'natural performance' to the outdoor industry.",
            constraints: "Bootstrapped budget; complex global supply chain logistics; high competition from established giants.",
            process: `
1. **Brand Identity**: Crafted a minimalist, nature-first brand identity focusing on 'the goat' (Caprae) as a symbol of rugged adaptability.
2. **Supply Chain**: Sourced GOTS-certified organic cotton and wool manufacturers in Portugal.
3. **Launch Strategy**: Executed a targeted influencer campaign and pop-up events in key urban centers.`,
            outcome: "Sold out initial inventory in 2 weeks. Expanded distribution to 3 countries. Featured in niche outdoor publications.",
            lessons: "A strong brand story is the most efficient marketing channel. Authenticity scales."
        }
    },
    {
        id: "kindling-labs",
        title: "Kindling Labs",
        summary: "A rapid prototyping lab shipping experimental software products. 5 products shipped.",
        tags: ["Software Engineering", "Product", "R&D"],
        date: "2024",
        content: {
            problem: "Many software ideas die in the 'validation' phase. We wanted to build a system for rapidly testing and shipping ideas.",
            context: "Kindling Labs is my personal software studio for rapid experimentation and product development.",
            constraints: "Solo developer bandwidth; need for speed; varying tech stacks.",
            process: `
1. **The 'Ship in a Weekend' Rule**: If the MVP can't be built in a weekend, the scope is too big.
2. **Reusable Architecture**: Built a core boilerplate (Next.js, Supabase, Tailwind) to eliminate setup time.
3. **Feedback Loops**: Immediate deployment to user communities for real-world feedback.`,
            outcome: "Shipped 5 functional products. 'Kindle' (a note-taking app) reached 10k+ users. Refined a repeatable build process.",
            lessons: "Perfection is the enemy of shipping. Real user feedback is the only valid metric."
        }
    },
    {
        id: "venture-scale",
        title: "Venture Scale Strategy",
        summary: "Led growth strategy for a Series B fintech startup, resulting in 200% ARR growth in 12 months.",
        tags: ["Strategy", "Growth", "Leadership"],
        date: "2024",
        content: {
            problem: "The company had hit a growth plateau at $5M ARR. CAC was increasing, and retention was slipping due to a lack of clear product positioning in a crowded market.",
            context: "I was brought in as interim Head of Growth to diagnose the bottleneck and implement a scalable acquisition engine.",
            constraints: "Limited marketing budget; needed to prove ROI within 3 months to unlock Series C funding conversations.",
            process: `
1. **Data Deep Dive**: Analyzed 2 years of customer data to identify our highest LTV segments.
2. **Positioning Overhaul**: Shifted messaging from 'All-in-one financial tool' to 'The financial OS for scaling agencies'.
3. **Channel Experimentation**: Launched 4 rapid experiments across LinkedIn, SEO, and Partnerships.`,
            outcome: "Identified 'Agencies' as the core ICP. New messaging increased conversion by 40%. Organic traffic grew 3x via targeted content hubs.",
            lessons: "Focus is the ultimate growth hack. By saying 'no' to 80% of the market, we won the 20% that mattered most."
        }
    },
    {
        id: "ai-architecture",
        title: "AI Product Architecture",
        summary: "Designed and shipped a generative AI-powered knowledge base for enterprise clients.",
        tags: ["Product", "AI", "Engineering"],
        date: "2023",
        content: {
            problem: "Enterprise employees were spending 20% of their time searching for internal documents across SharePoint, Slack, and Google Drive.",
            context: "Consulted for a F500 logistics company to modernize their internal knowledge management systems.",
            constraints: "Strict data privacy requirements (SOC2 type II). No data could leave their private cloud environment.",
            process: `
1. **Architecture Design**: Selected a RAG (Retrieval-Augmented Generation) approach using a self-hosted LLM (Llama 2).
2. **Prototype**: Built a POC in 2 weeks using Python/LangChain to demonstrate feasibility.
3. **Production**: Led a team of 4 engineers to build the full React/Node application with vector database integration.`,
            outcome: "Deployed to 5,000 users. Reduced average search time from 15 minutes to 30 seconds. Estimated $2M in annual productivity savings.",
            lessons: "In enterprise AI, trust is the product. The UI needed to cite sources for every answer to gain user adoption."
        }
    },
    {
        id: "ops-system",
        title: "Operational Excellence System",
        summary: "Refactored internal operations for a 50-person agency to optimize delivery margins by 30%.",
        tags: ["Operations", "Systems", "Consulting"],
        date: "2023",
        content: {
            problem: "Delivery margins were eroding (from 60% to 35%) as the agency scaled headcount. Projects were consistently over-budget due to scope creep.",
            context: "Engaged by the CEO to audit operations and implement a new delivery operating system.",
            constraints: "Cultural resistance to 'process'; the team prided themselves on being 'agile' (which meant unstructured).",
            process: `
1. **Value Stream Mapping**: Mapped the entire client lifecycle to identify waste.
2. **Standardization**: Created modular service blocks with fixed scopes and pricing.
3. **Tooling**: Migrated from Trello/Slack chaos to a structured ClickUp workflow with automated reporting.`,
            outcome: "Gross margins recovered to 62%. Project delivery time decreased by 20%. 'Fire-fighting' meetings dropped from daily to weekly.",
            lessons: "Systems liberate creatives. By standardizing the 'boring' work, we created more space for deep creative work."
        }
    },
    {
        id: "dao-governance",
        title: "Community First DAO",
        summary: "Architected tokenomics and governance structure for a web3 creator community.",
        tags: ["Web3", "Strategy", "Community"],
        date: "2022",
        content: {
            problem: "A community of 10k subscribers wanted to co-own a media publication but struggled with coordination and fair value attribution.",
            context: "Advisor to the founding team on token design and governance frameworks.",
            constraints: "Highly volatile market conditions; needed a model that was resilient to token price crashes.",
            process: `
1. **First Principles**: Defined 'Governance via Contribution' rather than 'Governance via Wealth'.
2. **Mechanism Design**: Implemented a dual-token structure (Equity + Reputation). 
3. **Rollout**: Phased progressive decentralization starting with soft-consensus snapshots.`,
            outcome: "Successfully launched with 1,500 active contributors. Governance participation rate of 40% (vs industry avg <5%).",
            lessons: "Incentives define behavior. If you reward speculation, you get speculators. If you reward work, you get builders."
        }
    },
];
