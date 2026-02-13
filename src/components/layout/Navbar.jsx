import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const { isDark, toggle } = useDarkMode();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Writing', path: '/writing' },
        { name: 'Now', path: '/now' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <nav className="border-b border-gray-100 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container-custom flex items-center justify-between h-16">
                <Link to="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    Jack Hu
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-white ${isActive(link.path)
                                    ? 'text-gray-900 dark:text-white'
                                    : 'text-gray-500 dark:text-gray-400'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={toggle}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggle}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 absolute w-full left-0 h-[calc(100vh-4rem)] animate-fade-in shadow-xl z-50">
                    <div className="container-custom py-8 flex flex-col gap-6 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    document.body.style.overflow = 'auto'; // Re-enable scroll
                                }}
                                className={`text-2xl font-medium py-2 transition-colors ${isActive(link.path)
                                        ? 'text-gray-900 dark:text-white'
                                        : 'text-gray-500 dark:text-gray-400'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
