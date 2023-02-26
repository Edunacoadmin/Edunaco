/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './packages/fe/app/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        100: '#f7f7f7',
        200: '#c1c1bb',
      },
      blue: {
        100: '#4489ef',
        200: '#5e6d83',
        DEFAULT: '#1c3150',
        500: '#1c3150',
      },
      orange: {
        DEFAULT: '#fabc33',
      },
    },
    extend: {},
  },
  plugins: [],
};
