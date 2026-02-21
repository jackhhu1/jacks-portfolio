import { ArrowRight } from 'lucide-react';

const Now = () => {
    return (
        <div className="container-custom py-20 pb-24 max-w-3xl">
            <div className="flex flex-col gap-4 mb-16 animate-slide-up">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Now</h1>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                    What I'm focused on at this moment.
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-2">
                    Updated Feb 2026
                </p>
            </div>

            <div className="space-y-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>

                <section>
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Current Focus
                    </h2>
                    <div className="prose dark:prose-invert text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p>
                            I am currently creating a new venture studio model for vertical AI applications.
                            The thesis is that small, highly-technical teams can outmaneuver incumbents by building deep workflow integrations that LLMs make possible for the first time.
                        </p>
                    </div>
                </section>

                <hr className="border-gray-100 dark:border-neutral-800" />

                <section>
                    <h2 className="text-xl font-semibold mb-6">Building</h2>
                    <ul className="space-y-6">
                        <li className="group">
                            <a href="#" className="block hover:bg-gray-50 dark:hover:bg-neutral-900 rounded-xl p-4 -mx-4 transition-colors">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Vertical AI Studio</h3>
                                    <span className="text-xs text-gray-400 font-mono">Founding</span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Developing the initial investment thesis and recruiting the first cohort of technical founders.
                                </p>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#" className="block hover:bg-gray-50 dark:hover:bg-neutral-900 rounded-xl p-4 -mx-4 transition-colors">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Personal Knowledge System</h3>
                                    <span className="text-xs text-gray-400 font-mono">Hacking</span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Experimenting with content led growth, personal assistant AI and more.
                                </p>
                            </a>
                        </li>
                    </ul>
                </section>

                <hr className="border-gray-100 dark:border-neutral-800" />

                <section>
                    <h2 className="text-xl font-semibold mb-6">Reading & Thinking</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-gray-50 dark:bg-neutral-900/50 p-5 rounded-lg border border-gray-100 dark:border-neutral-800">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Book</span>
                            <h3 className="font-medium text-gray-900 dark:text-white mb-2">"Shoe Dog"</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Phil Knight</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-neutral-900/50 p-5 rounded-lg border border-gray-100 dark:border-neutral-800">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Paper</span>
                            <h3 className="font-medium text-gray-900 dark:text-white mb-2">"Attention Is All You Need"</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Re-reading with a focus on implementation details.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Now;
