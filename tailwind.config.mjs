import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content:
        [
            './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
            'node_modules/preline/dist/*.js',
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
    },
    plugins: [require('@tailwindcss/typography'), require('preline/plugin')],
};
