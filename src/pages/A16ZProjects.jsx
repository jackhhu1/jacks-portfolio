import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projects, getTagColor } from '../data/projects';

const TagPill = ({ tag }) => {
    const colors = getTagColor(tag);
    return (
        <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${colors.bg} ${colors.text} ${colors.border}`}>
            {tag}
        </span>
    );
};

const A16ZProjects = () => {
    const [filter, setFilter] = useState('All');

    // Tech & Engineering tags
    const technicalTags = [
        "Software Engineering", "Product", "Data", "AI",
        "Engineering", "R&D", "Design"
    ];

    const leadershipTags = [
        "Leadership", "Community", "Non-Profit", "Social Impact"
    ];

    const filteredProjects = projects.filter(p => {
        if (filter === 'All') return true;
        if (filter === 'Technical') {
            return p.tags.some(tag => technicalTags.includes(tag));
        }
        if (filter === 'Leadership') {
            return p.tags.some(tag => leadershipTags.includes(tag));
        }
        return true;
    });

    return (
        <div className="min-h-screen bg-[#070707] text-white selection:bg-[#00A3FF]/30">
            {/* Subtle ambient glow — warm tint to match A16Z main page */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[50vw] h-[35vh] bg-gradient-to-br from-[#00A3FF]/[0.03] via-transparent to-transparent rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[25vh] bg-gradient-to-tr from-[#00A3FF]/[0.02] to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">
                {/* Back Link */}
                <Link
                    to="/a16z"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-[#00A3FF] transition-colors mb-12 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] animate-pulse" />
                        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                            Jack Hu | Full Project Archive
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#00A3FF]">
                        All Projects
                    </h1>
                    <p className="text-lg text-white/40 max-w-xl">
                        A bit of everything I've worked on.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-3 mb-8 flex-wrap">
                    <button
                        onClick={() => setFilter('All')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === 'All'
                            ? 'bg-[#00A3FF]/10 text-[#00A3FF] border-[#00A3FF]/30'
                            : 'bg-white/5 text-white/40 border-transparent hover:text-white/60 hover:bg-white/10'
                            }`}
                    >
                        All Projects
                    </button>
                    <button
                        onClick={() => setFilter('Technical')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === 'Technical'
                            ? 'bg-[#00A3FF]/10 text-[#00A3FF] border-[#00A3FF]/30'
                            : 'bg-white/5 text-white/40 border-transparent hover:text-white/60 hover:bg-white/10'
                            }`}
                    >
                        Technical
                    </button>
                    <button
                        onClick={() => setFilter('Leadership')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === 'Leadership'
                            ? 'bg-[#00A3FF]/10 text-[#00A3FF] border-[#00A3FF]/30'
                            : 'bg-white/5 text-white/40 border-transparent hover:text-white/60 hover:bg-white/10'
                            }`}
                    >
                        Leadership
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col gap-4 px-6 py-5 rounded-xl border border-white/[0.06] bg-[#070707] hover:bg-white/[0.02] hover:border-[#00A3FF]/30 transition-all duration-300 h-full"
                        >
                            {/* Header row: Icon & Title */}
                            <div className="flex items-start gap-4">
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

                                {/* Content body */}
                                <div className="flex-1 min-w-0 flex flex-col h-full">
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h3 className="text-base font-semibold text-white group-hover:text-[#00A3FF] transition-colors line-clamp-2 leading-tight">
                                            {project.title}
                                        </h3>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-shrink-0 text-white/20 hover:text-[#00A3FF] transition-colors mt-0.5"
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

                                    {/* Bottom Row: Tags & Date */}
                                    <div className="flex items-center justify-between gap-4 mt-auto pt-4">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {project.tags.slice(0, 2).map((tag) => (
                                                <TagPill key={tag} tag={tag} />
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-white/25 font-medium flex-shrink-0">
                                            <Calendar size={12} />
                                            {project.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                        to="/a16z"
                        className="text-sm text-white/30 hover:text-[#00A3FF] transition-colors"
                    >
                        ← Back to overview
                    </Link>
                    <span className="text-[11px] text-white/20 font-medium uppercase tracking-wider">
                        {filteredProjects.length} projects
                    </span>
                </div>
            </div>
        </div>
    );
};

export default A16ZProjects;
