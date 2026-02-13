
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="container-custom min-h-[60vh] flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-full mb-6">
                <HelpCircle size={48} className="text-gray-400" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">404</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto">
                Nothing here. But let’s build something.
            </p>
            <Link to="/" className="btn btn-primary">
                Back Home
            </Link>
        </div>
    );
};

export default NotFound;
