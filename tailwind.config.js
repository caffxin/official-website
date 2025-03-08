/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0B1B32', // darkest navy
          800: '#0D1E4C', // dark navy
          700: '#26415E', // navy
          DEFAULT: '#0D1E4C',
        },
        secondary: {
          400: '#83A6CE', // light blue
          300: '#C48CB3', // mauve
          200: '#E5C9D7', // light pink
          DEFAULT: '#C48CB3',
        },
        accent: {
          dark: '#26415E',
          DEFAULT: '#83A6CE',
          light: '#E5C9D7',
        },
      },
    },
  },
  plugins: [],
};