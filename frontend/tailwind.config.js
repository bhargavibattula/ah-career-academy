/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0b1257',
          dark: '#070d3e',
          light: '#131d5e',
        },
        orange: {
          500: '#f97316',
          600: '#ea6c1e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(135deg, #2d1b8a 0%, #8b2232 100%)',
      }
    },
  },
  plugins: [],
}
