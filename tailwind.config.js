/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: 'bold',
        },
        h2: { fontSize: theme('fontSize.xl'), fontWeight: 'bold' },
        h3: { fontSize: theme('fontSize.lg'), fontWeight: 'bold' },
      });
    }),
  ],
};
