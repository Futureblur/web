import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                mono:
                    ['Space Grotesk Variable', ...defaultTheme.fontFamily.mono],
                serif: ['Instrument Serif', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
