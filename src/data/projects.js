export const projects = [
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
