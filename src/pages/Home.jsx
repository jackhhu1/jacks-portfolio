
import { useState } from 'react';
import { ArrowRight, ChevronDown, Plus, Minus, Layers, Users, Zap, Compass, Lightbulb, Hexagon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Frameworks = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const frameworks = [
        {
            title: "Scaling 0 → 1",
            icon: <Zap size={20} />,
            detail: "The first 100 users are not found; they are forged. My approach focuses on manual onboarding, tight feedback loops, and 'doing things that don't scale' until you have painful product-market fit.",
            metric: "Retention > Acquisition"
        },
        {
            title: "Structuring Ambiguity",
            icon: <Hexagon size={20} />,
            detail: "When data is scarce, we rely on first principles. I break down complex markets into their fundamental truths—physics, psychology, and incentives—to build conviction where others see chaos.",
            metric: "Clarity over Certainty"
        },
        {
            title: "High-Performance Teams",
            icon: <Users size={20} />,
            detail: "Great teams aren't just hired; they are culturally engineered. I build systems of high accountability and low bureaucracy, where 'shipping' is the primary currency of status.",
            metric: "Velocity + Quality"
        }
    ];

    return (
        <section className="py-24 border-t border-gray-100 dark:border-neutral-800">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                            <Layers className="text-gray-400" size={24} />
                            Thinking Models
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                            I don't believe in hacks. I believe in repeatable, robust frameworks that reduce decision fatigue and increase the probability of success.
                        </p>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-4">
                        {frameworks.map((fw, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveIdx(activeIdx === idx ? -1 : idx)}
                                className={`border border-gray-100 dark:border-neutral-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${activeIdx === idx ? 'bg-gray-50 dark:bg-neutral-900/50 shadow-sm' : 'hover:bg-gray-50 dark:hover:bg-neutral-900/30'}`}
                            >
                                <div className="flex items-center justify-between p-5">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${activeIdx === idx ? 'bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-neutral-900 text-gray-500'}`}>
                                            {fw.icon}
                                        </div>
                                        <h3 className={`font-medium text-lg ${activeIdx === idx ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                                            {fw.title}
                                        </h3>
                                    </div>
                                    <div className={`text-gray-400 transition-transform duration-300 ${activeIdx === idx ? 'rotate-180' : ''}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-5 pb-6 pl-[4.5rem] pr-8">
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-3">
                                            {fw.detail}
                                        </p>
                                        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                                            <Compass size={12} />
                                            {fw.metric}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const WorkWithMe = () => {
    return (
        <section className="py-24 border-t border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/20">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">Work With Me</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                I partner with a select number of founders and leadership teams to untangle complex problems. No fluff, just results.
                            </p>
                            <a href="mailto:jackhhu1@gmail.com" className="btn btn-primary">
                                Start a Conversation
                            </a>
                        </div>
                        <div className="grid gap-4">
                            {[
                                { title: "Advisory", desc: "Ongoing strategic guidance for Series A-B founders." },
                                { title: "Strategy Sprints", desc: "4-week intensive deep dives into new markets." },
                                { title: "Product Audits", desc: "Rigorous UX/Technical review of your core loop." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-neutral-900 p-5 rounded-lg border border-gray-100 dark:border-neutral-800 shadow-sm flex items-start gap-4">
                                    <div className="mt-1 text-blue-600 dark:text-blue-400">
                                        <Lightbulb size={18} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="container-custom flex flex-col justify-center min-h-[80vh] py-20 animate-fade-in relative">
                <div className="max-w-xl">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        Jack Hu
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                        I build and scale systems at the intersection of <span className="text-gray-900 dark:text-white font-medium">strategy</span> and <span className="text-gray-900 dark:text-white font-medium">product</span>.
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
                        Helping founders bridge the gap between visionary strategy and technical execution.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => navigate('/projects')} className="btn btn-primary group">
                            View Work <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button onClick={() => navigate('/about')} className="btn btn-ghost">
                            More About Me
                        </button>
                    </div>
                </div>

                {/* Subtle scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 animate-bounce text-gray-400 dark:text-gray-600">
                    <ChevronDown size={24} />
                </div>
            </section>

            {/* Thinking Frameworks */}
            <Frameworks />

            {/* Work With Me */}
            <WorkWithMe />
        </div>
    );
};

export default Home;
