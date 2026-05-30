/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'football-blue': '#1e40af',
        'football-green': '#15803d',
        'football-gold': '#ca8a04',
      },
    },
  },
  plugins: [],
};
