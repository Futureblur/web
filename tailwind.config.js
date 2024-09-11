/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {

    },
  },
  plugins: [require('@tailwindcss/typography'),],
}

