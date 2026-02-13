const About = () => {
    return (
        <div className="container-custom py-20 pb-24 max-w-3xl">
            <div className="flex flex-col gap-4 mb-16 animate-slide-up">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About</h1>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                    I'm a builder at heart, driven by strategy and grounded in execution.
                </p>
            </div>

            <div className="space-y-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">What I work on</h2>
                    <div className="prose dark:prose-invert text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p>
                            My work sits at the intersection of product, engineering, and growth. I don't just write strategy decks; I deploy code, design systems, and lead teams to execute on that strategy.
                            Whether it's scaling a fintech product used by thousands or architecting a token economy for a decentralized community, I focus on building resilient systems that compound over time.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">What I believe</h2>
                    <div className="prose dark:prose-invert text-gray-600 dark:text-gray-400 leading-relaxed">
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Clear thinking precedes clear execution.</strong> Writing is the best tool for rigorous thought.</li>
                            <li><strong>Speed is a habit.</strong> Momentum is easier to maintain than to generate.</li>
                            <li><strong>Simplicity scales.</strong> Complexity is the enemy of reliability and speed.</li>
                            <li><strong>Ownership is binary.</strong> You either own the outcome or you don't.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">What I'm building toward</h2>
                    <div className="prose dark:prose-invert text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p>
                            I am currently focused on enabling the next generation of software products through AI and decentralized systems.
                            My long-term goal is to build tools that empower individuals to achieve financial and creative sovereignty.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default About;
