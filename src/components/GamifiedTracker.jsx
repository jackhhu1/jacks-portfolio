import { useRef, useEffect, useState } from 'react';
import { Flame, Rocket, Terminal, CheckCircle2, Circle, Loader2, Zap } from 'lucide-react';

const GamifiedTracker = () => {
    const [activeTab, setActiveTab] = useState('status');
    const [typedText, setTypedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = '> building something new...';

    // Typewriter effect
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= fullText.length) {
                setTypedText(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 80);
        return () => clearInterval(interval);
    }, []);

    // Blinking cursor
    useEffect(() => {
        const interval = setInterval(() => setShowCursor(prev => !prev), 530);
        return () => clearInterval(interval);
    }, []);

    const milestones = [
        { label: 'Idea validated', done: true },
        { label: 'MVP shipped', done: true },
        { label: 'Beta users onboarded', done: true },
        { label: 'Product-market fit', done: false, active: true },
        { label: 'Scale', done: false },
    ];

    const stats = [
        { label: 'Products shipped', value: '5', icon: Rocket },
        { label: 'Lines of code', value: '42k', icon: Terminal },
        { label: 'Active users', value: '10k+', icon: Zap },
    ];

    return (
        <div className="glass rounded-2xl overflow-hidden max-w-sm w-full">
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200/50 dark:border-white/10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <Flame size={16} className="text-white" />
                </div>
                <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Kindling Labs</div>
                    <div className="text-[11px] text-green-600 dark:text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Currently building
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200/50 dark:border-white/10">
                {['status', 'stats', 'log'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-2.5 text-[11px] font-semibold uppercase tracking-wider transition-all
                            ${activeTab === tab
                                ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white'
                                : 'text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-5 min-h-[180px]">
                {activeTab === 'status' && (
                    <div className="space-y-3">
                        {milestones.map((m, i) => (
                            <div key={i} className="flex items-center gap-3">
                                {m.done ? (
                                    <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                ) : m.active ? (
                                    <Loader2 size={16} className="text-orange-500 animate-spin shrink-0" />
                                ) : (
                                    <Circle size={16} className="text-gray-300 dark:text-gray-700 shrink-0" />
                                )}
                                <span className={`text-sm ${m.done
                                        ? 'text-gray-500 dark:text-gray-400 line-through'
                                        : m.active
                                            ? 'text-gray-900 dark:text-white font-medium'
                                            : 'text-gray-400 dark:text-gray-600'
                                    }`}>
                                    {m.label}
                                </span>
                                {m.active && (
                                    <span className="ml-auto text-[10px] bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded-full font-semibold">
                                        IN PROGRESS
                                    </span>
                                )}
                            </div>
                        ))}
                        {/* Progress bar */}
                        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5">
                            <div className="flex justify-between text-[11px] text-gray-500 mb-1.5">
                                <span>Progress</span>
                                <span>60%</span>
                            </div>
                            <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-[60%] bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000"></div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'stats' && (
                    <div className="space-y-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                <div className="flex items-center gap-3">
                                    <stat.icon size={16} className="text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                                </div>
                                <span className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'log' && (
                    <div className="font-mono text-xs leading-relaxed space-y-1.5">
                        <div className="text-green-600 dark:text-green-400">✓ deployed v2.4.1 to production</div>
                        <div className="text-gray-500 dark:text-gray-500">  2 hours ago</div>
                        <div className="text-blue-600 dark:text-blue-400 mt-3">→ refactoring auth module</div>
                        <div className="text-gray-500 dark:text-gray-500">  in progress</div>
                        <div className="text-gray-400 dark:text-gray-600 mt-3">⊘ planning: analytics dashboard v3</div>
                        <div className="text-gray-500 dark:text-gray-500">  queued</div>
                        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 text-gray-500">
                            {typedText}
                            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>▊</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GamifiedTracker;
