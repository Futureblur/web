const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        gradient: "gradient 6s linear infinite",
        "banner-reveal": "bannerReveal 1s ease forwards",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        bannerReveal: {
          "0%": { transform: "translateY(-150%)" },
          "100%": { width: "translateY(0px)" },
        },
      },
      colors: {
        red: "#E12F0C",
        primary: "black",
        secondary: "white",
        background: "#DED9DA",
      },
      fontFamily: {
        mono: ["Space Grotesk Variable", ...defaultTheme.fontFamily.mono],
        serif: ["Instrument Serif", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
