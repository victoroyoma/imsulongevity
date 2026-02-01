
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#C45C26',
          dark: '#A0461A',
          light: '#D97A4A',
        },
        sand: {
          DEFAULT: '#E8DCC4',
          light: '#F5EFE6',
          dark: '#D1C0A0',
        },
        forest: {
          DEFAULT: '#2D5A3D',
          dark: '#1F3F2A',
          light: '#3E7A53',
        },
        gold: {
          DEFAULT: '#D4A84B',
          light: '#E5C275',
          dark: '#B08835',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#333333',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'pattern-overlay': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C45C26' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
