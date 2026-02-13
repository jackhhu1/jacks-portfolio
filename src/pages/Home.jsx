
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="container-custom flex flex-col justify-center min-h-[90vh] py-20 animate-fade-in relative border-b border-gray-100 dark:border-neutral-800">
                <div className="max-w-xl">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1]">
                        Jack Hu
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-6">
                        Strategy-driven builder.
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-lg">
                        Turning ambiguous problems into scalable systems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => navigate('/projects')} className="btn btn-primary group px-6 py-3 text-base">
                            View Work <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>

                {/* Subtle scroll indicator */}
                <div className="absolute bottom-12 left-6 animate-pulse text-gray-400 dark:text-gray-600 hidden md:block">
                    <ChevronDown size={24} />
                </div>
            </section>

            {/* Section 1 - Strategy */}
            <section className="py-24 md:py-32 border-b border-gray-100 dark:border-neutral-800">
                <div className="container-custom grid md:grid-cols-[240px_1fr] gap-12">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mt-2">01 Strategy</h2>
                    <div className="max-w-2xl">
                        <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-white leading-tight">
                            I’m drawn to complex, ambiguous problems.
                        </h3>
                        <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                            <p>
                                From scaling student organisations nationally to building new revenue lines from scratch, I approach growth the same way: clarify incentives, design systems, execute deliberately.
                            </p>
                            <p>
                                I believe strong strategy is not slides - <span className="text-gray-900 dark:text-white font-medium">it’s architecture.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 - Build */}
            <section className="py-24 md:py-32 border-b border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/20">
                <div className="container-custom grid md:grid-cols-[240px_1fr] gap-12">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mt-2">02 Build</h2>
                    <div className="max-w-2xl">
                        <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-white leading-tight">
                            I like building things that work in the real world.
                        </h3>
                        <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                            <p>
                                I’ve helped scale new ventures from zero to meaningful revenue, led high-performance teams, and experimented in AI and product environments.
                            </p>
                            <p>
                                My bias is toward action - <span className="text-gray-900 dark:text-white font-medium">but always structured.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Lead */}
            <section className="py-24 md:py-32 border-b border-gray-100 dark:border-neutral-800">
                <div className="container-custom grid md:grid-cols-[240px_1fr] gap-12">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mt-2">03 Lead</h2>
                    <div className="max-w-2xl">
                        <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-white leading-tight">
                            High performance is cultural.
                        </h3>
                        <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                            <p>
                                Whether leading national initiatives or operating in competitive environments, I care deeply about raising standards and helping others grow alongside me.
                            </p>
                            <p>
                                <span className="text-gray-900 dark:text-white font-medium">Excellence compounds when teams are aligned.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 - Interests */}
            <section className="py-24 md:py-32">
                <div className="container-custom grid md:grid-cols-[240px_1fr] gap-12">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mt-2">04 Interests</h2>
                    <div className="max-w-2xl">
                        <ul className="space-y-8">
                            {[
                                "Scaling early-stage ventures",
                                "AI-enabled systems",
                                "High-performance team design"
                            ].map((interest, i) => (
                                <li key={i} className="flex items-center gap-4 text-2xl md:text-3xl font-medium text-gray-900 dark:text-white group cursor-default">
                                    <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-neutral-700 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors"></span>
                                    {interest}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
