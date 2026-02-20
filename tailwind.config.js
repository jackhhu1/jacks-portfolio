/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#f3f4f6',
                    DEFAULT: '#1f2937',
                    dark: '#111827',
                },
                accent: {
                    light: '#3b82f6',
                    DEFAULT: '#2563eb',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'marquee': 'marquee linear infinite',
                'soft-pulse': 'softPulse 8s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                softPulse: {
                    '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
                    '50%': { opacity: '0.9', transform: 'scale(1.05)' },
                },
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('colors.blue.600'),
                            '&:hover': {
                                color: theme('colors.blue.700'),
                            },
                        },
                        'h2, h3, h4': {
                            'font-weight': '600',
                            'letter-spacing': '-0.025em',
                        },
                        code: {
                            color: theme('colors.pink.600'),
                        },
                    },
                },
                invert: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.blue.400'),
                            '&:hover': {
                                color: theme('colors.blue.300'),
                            },
                        },
                        'h1, h2, h3, h4': {
                            color: theme('colors.gray.100'),
                        },
                        strong: {
                            color: theme('colors.gray.100'),
                        },
                        code: {
                            color: theme('colors.pink.400'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        typography,
    ],
}
