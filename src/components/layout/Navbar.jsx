import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const { isDark, toggle } = useDarkMode();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Projects', path: '/projects' },
        { name: 'Writing', path: '/writing' },
        { name: 'Now', path: '/now' },
        { name: 'About', path: '/about' },
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
        <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
            <div className="container-custom flex items-center justify-between h-20">
                {/* Logo Area */}
                <div className="pointer-events-auto">
                    <Link to="/" className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
                        Jack Hu
                    </Link>
                </div>

                {/* Desktop Navigation Floating Pill */}
                <div className="hidden md:flex items-center pointer-events-auto">
                    <div className="flex items-center gap-1 bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full p-1.5 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-gray-900 text-white dark:bg-white dark:text-black shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden pointer-events-auto">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-full bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-40 animate-fade-in pointer-events-auto md:hidden flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-8 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    document.body.style.overflow = 'auto';
                                }}
                                className="text-3xl font-light tracking-tight text-gray-900 dark:text-white/80 hover:text-gray-600 dark:hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => {
                                setIsMenuOpen(false);
                                document.body.style.overflow = 'auto';
                            }}
                            className="mt-8 px-8 py-3 bg-gray-900 text-white dark:bg-white dark:text-black rounded-full font-medium"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
