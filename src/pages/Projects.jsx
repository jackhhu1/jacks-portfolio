import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="container-custom py-20 pb-24">
            <div className="flex flex-col gap-4 mb-16 animate-slide-up">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Work</h1>
                <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
                    A blend of strategic initiatives, product launches, and technical implementations.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        className="group flex flex-col gap-6 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Subtle background gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-neutral-800/30"></div>

                        <div className="relative z-10 flex justify-between items-start">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <ArrowUpRight className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        </div>

                        <p className="relative z-10 text-gray-600 dark:text-gray-400 leading-relaxed">
                            {project.summary}
                        </p>

                        <div className="relative z-10 mt-auto pt-4 flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            Read Case Study
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
