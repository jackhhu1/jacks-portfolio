import { projects, getTagColor } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Tag Pill (uppercase, outlined, subtle) ─────────────────────
const TagPill = ({ tag }) => {
    const color = getTagColor(tag);
    return (
        <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${color.bg} ${color.text} ${color.border}`}>
            {tag}
        </span>
    );
};

// ─── Project Icon ───────────────────────────────────────────────
const ProjectIcon = ({ project, size = 'md' }) => {
    const sizeClasses = size === 'sm' ? 'w-9 h-9 text-base' : 'w-10 h-10 text-lg';

    if (project.iconImage) {
        return (
            <div className={`${sizeClasses} rounded-xl ${project.iconBg || 'bg-neutral-800'} flex items-center justify-center overflow-hidden`}>
                <img src={project.iconImage} alt={project.title} className="w-full h-full object-cover rounded-xl" />
            </div>
        );
    }

    return (
        <div className={`${sizeClasses} rounded-xl ${project.iconBg || 'bg-neutral-800'} flex items-center justify-center`}>
            {project.icon}
        </div>
    );
};

// ─── Featured Project Card ──────────────────────────────────────
const FeaturedCard = ({ project }) => {
    return (
        <Link
            to={`/projects/${project.id}`}
            className="group flex flex-col rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-gray-300 dark:hover:border-neutral-700 transition-all duration-300 overflow-hidden"
        >
            {/* Image */}
            <div className="relative h-40 w-full overflow-hidden bg-gray-100 dark:bg-neutral-800">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-5 flex-1">
                <ProjectIcon project={project} />

                <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2 leading-relaxed">
                        {project.summary}
                    </p>
                </div>

                {/* Tags + Date row */}
                <div className="flex items-end justify-between gap-2 mt-auto pt-1">
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 2).map((tag) => (
                            <TagPill key={tag} tag={tag} />
                        ))}
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-600 shrink-0 font-medium">
                        {project.date}
                    </span>
                </div>
            </div>
        </Link>
    );
};

// ─── All Projects Row ───────────────────────────────────────────
const ProjectRow = ({ project }) => {
    return (
        <Link
            to={`/projects/${project.id}`}
            className="group flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-all duration-200"
        >
            <ProjectIcon project={project} size="sm" />

            <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {project.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-2 mt-0.5">
                    {project.summary}
                </p>
            </div>

            <span className="text-xs text-gray-400 dark:text-gray-600 shrink-0 font-medium">
                {project.date}
            </span>
        </Link>
    );
};

// ─── Projects Page ──────────────────────────────────────────────
const Projects = () => {
    const featuredProjects = projects.filter(p => p.featured);
    const allProjects = projects.filter(p => !p.featured);

    return (
        <div className="container-custom py-20 pb-32 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 animate-slide-up">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h1>
                <p className="text-base text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
                    A blend of strategic initiatives, product launches, and technical implementations.
                </p>
            </div>

            {/* Featured Section */}
            <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-6 px-1">
                    Featured
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featuredProjects.map((project) => (
                        <FeaturedCard key={project.id} project={project} />
                    ))}
                </div>
            </div>

            {/* All Projects Section */}
            <div className="animate-fade-in" style={{ animationDelay: '0.25s' }}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-4 px-1">
                    All Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-x-2 gap-y-0.5 border-t border-gray-100 dark:border-neutral-800 pt-4">
                    {allProjects.map((project) => (
                        <ProjectRow key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
