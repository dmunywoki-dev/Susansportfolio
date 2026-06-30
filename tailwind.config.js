/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e',      // Rich teal
        accent: '#10b981',       // Vibrant emerald
        'accent-dark': '#059669',  // Wrapped in quotes
        dark: '#0f172a',
        'light-green': '#d1fae5',  // Wrapped in quotes
      }
    },
  },
  plugins: [],
}