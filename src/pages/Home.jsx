import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Code, Briefcase } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col gap-24 py-20 lg:py-32">
            {/* Hero Section */}
            <section className="container-custom flex flex-col gap-8 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                    Jack Hu
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                    I build and scale systems at the intersection of strategy and product.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
                    Helping founders and operators bridge the gap between visionary strategy and technical execution.
                </p>
                <div className="flex gap-4 pt-4">
                    <Link to="/projects" className="btn btn-primary">
                        View Work
                    </Link>
                    <Link to="/contact" className="btn btn-ghost">
                        Contact Me
                    </Link>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="container-custom grid md:grid-cols-3 gap-12">
                <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900/50 hover:bg-gray-100 dark:hover:bg-neutral-900 transition-colors duration-300">
                    <Layers className="w-10 h-10 text-gray-900 dark:text-white mb-2" strokeWidth={1.5} />
                    <h2 className="text-2xl font-semibold">Strategy</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Market analysis, growth loops, and business model innovation to find product-market fit.
                    </p>
                    <Link to="/about" className="flex items-center gap-2 text-sm font-medium mt-auto group">
                        More about strategy <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900/50 hover:bg-gray-100 dark:hover:bg-neutral-900 transition-colors duration-300">
                    <Code className="w-10 h-10 text-gray-900 dark:text-white mb-2" strokeWidth={1.5} />
                    <h2 className="text-2xl font-semibold">Build</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Full-stack development, system architecture, and technical product management.
                    </p>
                    <Link to="/projects" className="flex items-center gap-2 text-sm font-medium mt-auto group">
                        See what I've built <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900/50 hover:bg-gray-100 dark:hover:bg-neutral-900 transition-colors duration-300">
                    <Briefcase className="w-10 h-10 text-gray-900 dark:text-white mb-2" strokeWidth={1.5} />
                    <h2 className="text-2xl font-semibold">Lead</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Building high-performance teams, setting culture, and driving operational excellence.
                    </p>
                    <Link to="/writing" className="flex items-center gap-2 text-sm font-medium mt-auto group">
                        Read my thoughts <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
