import { writing } from '../data/writing';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Writing = () => {
    const [selectedTag, setSelectedTag] = useState(null);

    // Get all unique tags
    const allTags = Array.from(new Set(writing.flatMap(post => post.tags)));

    const filteredPosts = selectedTag
        ? writing.filter(post => post.tags.includes(selectedTag))
        : writing;

    return (
        <div className="container-custom py-20 pb-24 max-w-3xl">
            <div className="flex flex-col gap-4 mb-16 animate-slide-up">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Thoughts</h1>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                    Reflections on building, scaling, and leading in uncertainty.
                </p>

                {/* Tag Filter */}
                <div className="flex flex-wrap gap-2 mt-4">
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === null
                                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                                : 'bg-gray-100 dark:bg-neutral-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-neutral-700'
                            }`}
                    >
                        All
                    </button>
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
                                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                                    : 'bg-gray-100 dark:bg-neutral-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-neutral-700'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {filteredPosts.map((post) => (
                    <Link
                        to={`/writing/${post.id}`}
                        key={post.id}
                        className="flex flex-col gap-3 group cursor-pointer"
                    >
                        <div className="flex items-center gap-3 text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                            <time>{post.date}</time>
                            <span>•</span>
                            <span>{post.readTime} read</span>
                        </div>
                        <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                            {post.content.replace(/#+\s/g, '').split('\n')[2]}...
                            {/* ^ Rudimentary excerpt extraction from markdown content */}
                        </p>
                        <div className="pt-2">
                            <span className="text-sm font-medium underline underline-offset-4 decoration-gray-300 dark:decoration-neutral-700 group-hover:decoration-blue-500 transition-colors">
                                Read Article
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Writing;
