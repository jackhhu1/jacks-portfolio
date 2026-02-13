import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container-custom py-20 pb-24 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-16">

                {/* Contact Info */}
                <div className="flex flex-col gap-8 animate-slide-up">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's Talk</h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400">
                            Interested in collaborating or just want to say hi? I'm always open to discussing new ideas.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <a href="mailto:jackhhu1@gmail.com" className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <div className="p-3 bg-gray-100 dark:bg-neutral-900 rounded-full">
                                <Mail size={24} />
                            </div>
                            <span className="text-lg font-medium">jackhhu1@gmail.com</span>
                        </a>
                        <a href="#" className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <div className="p-3 bg-gray-100 dark:bg-neutral-900 rounded-full">
                                <Linkedin size={24} />
                            </div>
                            <span className="text-lg font-medium">LinkedIn</span>
                        </a>
                        <a href="#" className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <div className="p-3 bg-gray-100 dark:bg-neutral-900 rounded-full">
                                <Twitter size={24} />
                            </div>
                            <span className="text-lg font-medium">Twitter</span>
                        </a>
                        <a href="#" className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <div className="p-3 bg-gray-100 dark:bg-neutral-900 rounded-full">
                                <Github size={24} />
                            </div>
                            <span className="text-lg font-medium">GitHub</span>
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="flex flex-col gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="px-4 py-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="px-4 py-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            className="px-4 py-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all resize-none"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>

                    <button type="button" className="btn btn-primary mt-2">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
