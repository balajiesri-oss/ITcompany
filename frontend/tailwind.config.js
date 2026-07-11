/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          700: '#1e40af',
          900: '#1e3a8a'
        },
        accent: '#ea580c'
      },
      boxShadow: {
        premium: '0 24px 70px rgba(30, 64, 175, 0.16)'
      },
      opacity: {
        8: '0.08',
        15: '0.15',
        72: '0.72',
        74: '0.74',
        78: '0.78',
        86: '0.86'
      }
    }
  },
  plugins: []
};
