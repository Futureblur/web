const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'gradient': 'gradient 6s linear infinite',
                'banner-reveal': 'bannerReveal 1s ease forwards',
            },
            keyframes: {
                gradient: {
                    "0%": {backgroundPosition: "0% 50%"},
                    "100%": {backgroundPosition: "100% 50%"},
                },
                bannerReveal: {
                    "0%": {transform: "translateY(-150%)"},
                    "100%": {width: "translateY(0px)"},
                }
            },
            fontFamily: {
                mono: ['Space Grotesk Variable', ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [],
}
