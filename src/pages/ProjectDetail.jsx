import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Markdown from 'react-markdown';
import { ArrowLeft, Clock, Calendar, CheckCircle2, AlertCircle, TrendingUp, Lightbulb } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);
    const topRef = useRef(null);

    if (!project) {
        return (
            <div className="container-custom py-20 text-center">
                <h1 className="text-2xl font-bold">Project not found</h1>
                <Link to="/projects" className="text-blue-600 hover:text-blue-800 underline mt-4 inline-block">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="container-custom py-20 pb-32 max-w-4xl" ref={topRef}>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} /> Back to Projects
            </Link>

            <header className="mb-12 animate-slide-up">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
                            {tag}
                        </span>
                    ))}
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 dark:bg-neutral-900 text-gray-500 border border-gray-200 dark:border-neutral-800 flex items-center gap-1">
                        <Calendar size={10} /> {project.date}
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                    {project.summary}
                </p>
            </header>

            <div className="grid gap-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>

                {/* Context Section */}
                <section className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mt-1">Context</h2>
                    <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        <p>{project.content.context}</p>
                    </div>
                </section>

                <hr className="border-gray-100 dark:border-neutral-800" />

                {/* Problem & Constraints */}
                <section className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mt-1">Challenge</h2>
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-gray-900 dark:text-white font-medium">
                                <AlertCircle size={18} className="text-red-500" />
                                <h3>The Problem</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.content.problem}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-gray-900 dark:text-white font-medium">
                                <div className="w-[18px] h-[18px] border-2 border-gray-400 rounded-sm"></div>
                                <h3>Constraints</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.content.constraints}</p>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100 dark:border-neutral-800" />

                {/* Process / Decision */}
                <section className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mt-1">Process</h2>
                    <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        <Markdown>{project.content.process}</Markdown>
                    </div>
                </section>

                <hr className="border-gray-100 dark:border-neutral-800" />

                {/* Outcome */}
                <section className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mt-1">Outcome</h2>
                    <div className="bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-gray-100 dark:border-neutral-800">
                        <div className="flex items-start gap-3">
                            <TrendingUp className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" size={20} />
                            <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                                {project.content.outcome}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Lessons Learned */}
                <section className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mt-1">Retrospective</h2>
                    <div>
                        <div className="flex items-start gap-3">
                            <Lightbulb className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                            <p className="text-gray-700 dark:text-gray-300 italic">
                                "{project.content.lessons}"
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ProjectDetail;
