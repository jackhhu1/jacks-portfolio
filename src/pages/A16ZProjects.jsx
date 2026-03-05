import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, getTagColor } from '../data/projects';

const TagPill = ({ tag }) => {
    const color = getTagColor(tag);
    return (
        <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-white/5 text-white/50 border-white/10`}>
            {tag}
        </span>
    );
};

const A16ZProjects = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/20">
            {/* Subtle ambient glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-[60vw] h-[40vh] bg-gradient-to-br from-blue-900/8 via-purple-900/5 to-transparent rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[40vw] h-[30vh] bg-gradient-to-tl from-indigo-900/8 to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">
                {/* Back Link */}
                <Link
                    to="/a16z"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-colors mb-12 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                            Jack Hu — Full Project Archive
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        All Projects
                    </h1>
                    <p className="text-lg text-white/40 max-w-xl">
                        A comprehensive view of strategic initiatives, product launches, and technical implementations.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group flex items-start gap-6 px-6 py-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0 mt-0.5">
                                {project.iconImage ? (
                                    <div className={`w-10 h-10 rounded-xl ${project.iconBg || 'bg-neutral-800'} flex items-center justify-center overflow-hidden`}>
                                        <img src={project.iconImage} alt={project.title} className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                ) : (
                                    <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg`}>
                                        {project.icon}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-base font-semibold text-white group-hover:text-white/90 transition-colors truncate">
                                        {project.title}
                                    </h3>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-shrink-0 text-white/20 hover:text-white/60 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                                {project.summary && (
                                    <p className="text-sm text-white/40 leading-relaxed mb-2 line-clamp-2">
                                        {project.summary}
                                    </p>
                                )}
                                <div className="flex items-center gap-2 flex-wrap">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <TagPill key={tag} tag={tag} />
                                    ))}
                                </div>
                            </div>

                            {/* Date */}
                            <div className="hidden sm:flex items-center gap-1.5 text-xs text-white/25 font-medium flex-shrink-0 mt-1">
                                <Calendar size={12} />
                                {project.date}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                        to="/a16z"
                        className="text-sm text-white/30 hover:text-white transition-colors"
                    >
                        ← Back to overview
                    </Link>
                    <span className="text-[11px] text-white/20 font-medium uppercase tracking-wider">
                        {projects.length} projects
                    </span>
                </div>
            </div>
        </div>
    );
};

export default A16ZProjects;
