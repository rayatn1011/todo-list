/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#FFC1AB',
          400: '#FFA889',
          500: '#FF8356',
          600: '#FF663C',
          700: '#FF532B',
        },
        red: {
          700: '#E52A2A',
        },
        green: {
          700: '#21AB0B',
        },
        black: {
          50: '#F5F5F5',
          100: '#E4E4E4',
          200: '#BCBCBC',
          400: '#8F8F8F',
          600: '#626262',
          800: '#404040',
          900: '#1E1E1E',
        },
      },
    },
  },
  plugins: [],
};
