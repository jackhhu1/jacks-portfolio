import { useState } from 'react';
import { ArrowUpRight, Users, TrendingUp, Code, Globe, Shirt } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectShowcase = () => {
    const navigate = useNavigate();
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 'enactus',
            title: 'Enactus',
            category: 'Social Impact',
            description: 'Scaled the UniMelb chapter, achieving 3x revenue growth, highest ever retention and NPS improvement from 51-90.',
            metrics: [
                { label: 'Team Size', value: '150+', icon: Users },
                { label: 'Revenue', value: '$50k+', icon: TrendingUp },
            ],
            color: 'from-orange-500 to-red-600',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80', // Placeholder: Team collaboration
            path: '/projects/enactus'
        },
        {
            id: 'caprae',
            title: 'Caprae',
            category: 'Brand Strategy',
            description: 'Building a sustainable outdoor apparel brand from zero to international launch.',
            metrics: [
                { label: 'Reach', value: '3 Countries', icon: Globe },
                { label: 'Product', value: '100% Organic', icon: Shirt },
            ],
            color: 'from-emerald-600 to-teal-800',
            image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80', // Placeholder: Fashion/Coat
            path: '/projects/caprae'
        },
        {
            id: 'kindling-labs',
            title: 'Kindling Labs',
            category: 'Software Studio',
            description: 'A rapid prototyping lab shipping experimental software products.',
            metrics: [
                { label: 'Shipped', value: '5 Products', icon: Code },
                { label: 'Users', value: '10k+', icon: Users },
            ],
            color: 'from-blue-600 to-indigo-800',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80', // Placeholder: Tech/Code
            path: '/projects/kindling-labs'
        }
    ];

    return (
        <section className="py-24 border-b border-gray-100 dark:border-neutral-800">
            <div className="container-custom mb-12">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">Selected Work</h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                    Impact through creation.
                </h3>
            </div>

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-6 h-[800px] lg:h-[600px] transition-all duration-500 ease-out">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                            onClick={() => navigate(project.path)}
                            className={`
                                relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                                ${activeProject === project.id ? 'lg:flex-[2.5]' : 'lg:flex-1'}
                                flex-1 flex flex-col justify-end
                            `}
                        >
                            {/* Background Image with Gradient Overlay */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80 mix-blend-multiply transition-opacity duration-500`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                                {/* Top Content (Category) */}
                                <div className={`absolute top-8 left-8 transition-all duration-300 ${activeProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 lg:opacity-100 lg:translate-y-0'}`}>
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Main Title */}
                                <div className="mb-4">
                                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className={`text-gray-200 line-clamp-2 transition-all duration-500 ${activeProject === project.id ? 'opacity-100 max-h-20' : 'opacity-80 max-h-0 lg:max-h-20'}`}>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Metrics & Action - Visible on Hover/Active */}
                                <div className={`
                                    space-y-6 transition-all duration-500 overflow-hidden
                                    ${activeProject === project.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 lg:max-h-0'}
                                `}>
                                    <div className="grid grid-cols-2 gap-4">
                                        {project.metrics.map((metric, idx) => (
                                            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10">
                                                <metric.icon className="w-5 h-5 text-white/70 mb-2" />
                                                <div className="text-lg font-bold text-white">{metric.value}</div>
                                                <div className="text-xs text-gray-300 uppercase tracking-wider">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full py-4 bg-white text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                                        View Case Study <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
