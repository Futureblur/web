import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content:
        [
            './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        ],
    theme: {
        extend: {
            fontFamily: {
                mono:
                    ['Space Grotesk Variable', ...defaultTheme.fontFamily.mono],
                serif: ['Instrument Serif', ...defaultTheme.fontFamily.serif],
                sans:
                    [
                        'Instrument Sans Variable',
                        ...defaultTheme.fontFamily.sans
                    ],
            },
        },
        colors: {
            'current': 'currentColor',
            'transparent': 'transparent',
            'black': '#000000',
            'white': '#FFFFFF',
            'accent': '#BA1F00',
            'neutral': {
                100: '#F5F5F5',
                700: '#7B7B7B',
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
