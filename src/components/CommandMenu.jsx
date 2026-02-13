
import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Home,
    Briefcase,
    PenTool,
    User,
    Mail,
    Search,
    Moon,
    Sun,
    Layout
} from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export const CommandMenu = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { isDark, toggle } = useDarkMode();

    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const runCommand = (command) => {
        setOpen(false);
        command();
    };

    if (!open) return null;

    return (
        <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu">
            <div className="flex items-center border-b border-gray-100 dark:border-neutral-800 px-3" cmdk-input-wrapper="">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <Command.Input placeholder="Type a command or search..." />
            </div>

            <Command.List>
                <Command.Empty>No results found.</Command.Empty>

                <Command.Group heading="Navigation">
                    <Command.Item onSelect={() => runCommand(() => navigate('/'))}>
                        <Home className="w-4 h-4 mr-2" />
                        Home
                    </Command.Item>
                    <Command.Item onSelect={() => runCommand(() => navigate('/projects'))}>
                        <Briefcase className="w-4 h-4 mr-2" />
                        Projects
                    </Command.Item>
                    <Command.Item onSelect={() => runCommand(() => navigate('/writing'))}>
                        <PenTool className="w-4 h-4 mr-2" />
                        Writing
                    </Command.Item>
                    <Command.Item onSelect={() => runCommand(() => navigate('/now'))}>
                        <Layout className="w-4 h-4 mr-2" />
                        Now
                    </Command.Item>
                    <Command.Item onSelect={() => runCommand(() => navigate('/about'))}>
                        <User className="w-4 h-4 mr-2" />
                        About
                    </Command.Item>
                    <Command.Item onSelect={() => runCommand(() => navigate('/contact'))}>
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                    </Command.Item>
                </Command.Group>

                <Command.Group heading="Preferences">
                    <Command.Item onSelect={() => runCommand(toggle)}>
                        {isDark ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                        Toggle Dark Mode
                    </Command.Item>
                </Command.Group>
            </Command.List>

            <div className="border-t border-gray-100 dark:border-neutral-800 px-4 py-2 flex items-center justify-between text-[10px] text-gray-400 bg-gray-50 dark:bg-neutral-900/50">
                <span>Press <kbd className="font-mono bg-gray-200 dark:bg-neutral-800 px-1 rounded">esc</kbd> to close</span>
                <span>Navigation</span>
            </div>
        </Command.Dialog>
    );
};
