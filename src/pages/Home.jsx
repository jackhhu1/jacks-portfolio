
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase';

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
                        Building scalable systems
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-lg">
                        Across student organizations, investment business lines and software
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

            {/* New Interactive Project Showcase */}
            <ProjectShowcase />
        </div>
    );
};

export default Home;
