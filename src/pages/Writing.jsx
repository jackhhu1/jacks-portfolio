import { writing } from '../data/writing';

const Writing = () => {
    return (
        <div className="container-custom py-20 pb-24 max-w-3xl">
            <div className="flex flex-col gap-4 mb-16 animate-slide-up">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Thoughts</h1>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                    Reflections on building, scaling, and leading in uncertainty.
                </p>
            </div>

            <div className="flex flex-col gap-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {writing.map((post) => (
                    <article
                        key={post.id}
                        className="flex flex-col gap-3 group cursor-pointer"
                    >
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                            <time>{post.date}</time>
                            <span>{post.time}</span>
                        </div>
                        <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {post.preview}
                        </p>
                        <div className="pt-2">
                            <span className="text-sm font-medium underline underline-offset-4 decoration-gray-300 dark:decoration-neutral-700 group-hover:decoration-blue-500 transition-colors">
                                Read Article
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Writing;
