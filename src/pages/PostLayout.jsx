import { useParams, Link } from 'react-router-dom';
import { writing } from '../data/writing';
import Markdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

const PostLayout = () => {
    const { id } = useParams();
    const post = writing.find(p => p.id === id);

    if (!post) {
        return (
            <div className="container-custom py-20 text-center">
                <h1 className="text-2xl font-bold">Post not found</h1>
                <Link to="/writing" className="text-blue-600 hover:text-blue-800 underline mt-4 inline-block">
                    Back to Writing
                </Link>
            </div>
        );
    }

    return (
        <article className="container-custom py-20 pb-32 max-w-3xl animate-fade-in">
            <Link to="/writing" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} /> Back to Writing
            </Link>

            <header className="mb-10">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
                    {post.title}
                </h1>
                <div className="flex gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            <div className="prose prose-lg dark:prose-invert prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-800 dark:hover:prose-a:text-blue-300 max-w-none">
                <Markdown>
                    {post.content}
                </Markdown>
            </div>
        </article>
    );
};

export default PostLayout;
