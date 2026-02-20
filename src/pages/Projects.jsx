import { projects, getTagColor } from '../data/projects';
import { ArrowUpRight, Sparkles, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

const TagPill = ({ tag }) => {
    const color = getTagColor(tag);
    return (
        <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border ${color.bg} ${color.text} ${color.border} transition-all duration-200 hover:scale-105`}>
            {tag}
        </span>
    );
};

const FeaturedProjectCard = ({ project, index }) => {
    return (
        <Link
            to={`/projects/${project.id}`}
            className="group relative flex flex-col gap-5 p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
        >
            {/* Gradient accent bar at top */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Subtle background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

            {/* Header row */}
            <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.accent} flex items-center justify-center text-xl shadow-lg shadow-black/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {project.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all duration-300">
                            {project.title}
                        </h3>
                        <span className="text-xs font-medium text-gray-400 dark:text-gray-500">{project.date}</span>
                    </div>
                </div>
                <div className="p-2 rounded-full border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800/50 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:border-gray-900 dark:group-hover:border-white transition-all duration-300">
                    <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                </div>
            </div>

            {/* Summary */}
            <p className="relative z-10 text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
                {project.summary}
            </p>

            {/* Tags */}
            <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag) => (
                    <TagPill key={tag} tag={tag} />
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 flex items-center gap-2 pt-2 text-sm font-semibold text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                <span>Read Case Study</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
        </Link>
    );
};

const AllProjectCard = ({ project }) => {
    return (
        <Link
            to={`/projects/${project.id}`}
            className="group flex items-center gap-5 p-5 rounded-2xl border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 hover:shadow-lg hover:border-gray-200 dark:hover:border-neutral-700 hover:-translate-y-0.5 transition-all duration-300"
        >
            {/* Icon */}
            <div className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center text-lg shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {project.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all">
                        {project.title}
                    </h3>
                    <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">{project.date}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1 mb-2">
                    {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <TagPill key={tag} tag={tag} />
                    ))}
                </div>
            </div>

            {/* Arrow */}
            <ArrowUpRight size={18} className="shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
        </Link>
    );
};

const Projects = () => {
    const featuredProjects = projects.filter(p => p.featured);
    const allProjects = projects.filter(p => !p.featured);

    return (
        <div className="container-custom py-20 pb-32">
            {/* Page Header */}
            <div className="flex flex-col gap-4 mb-16 animate-slide-up">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Work</h1>
                <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
                    A blend of strategic initiatives, product launches, and technical implementations.
                </p>
            </div>

            {/* Featured Section */}
            <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-2.5 mb-8">
                    <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-500/20">
                        <Sparkles size={16} className="text-amber-600 dark:text-amber-400" />
                    </div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                        Featured Projects
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-neutral-800 to-transparent ml-3" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project, index) => (
                        <FeaturedProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* All Projects Section */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-2.5 mb-8">
                    <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-neutral-800">
                        <LayoutGrid size={16} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                        All Projects
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-neutral-800 to-transparent ml-3" />
                </div>

                <div className="flex flex-col gap-3">
                    {allProjects.map((project) => (
                        <AllProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
