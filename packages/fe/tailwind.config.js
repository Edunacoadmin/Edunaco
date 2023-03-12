/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
// gaps 1 2 4 8 12 16 18 20 24 28 32 40 48 … +8px

module.exports = {
  content: [
    './packages/fe/app/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,

      screens: {
        DEFAULT: 'calc(100% - 40px)',
        sm: '540px',
        md: '768px',
        lg: '924px',
        xl: '1180px',
        '2xl': '1436px',
      },
      padding: {
        DEFAULT: '1.25rem',
        sm: 0,
        md: 0,
        lg: 0,
        xl: 0,
        '2xl': 0,
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        100: '#F7F7F7',
        200: '#E6E6E6',
        300: '#1A293E17',
        400: '#1A293E29',
        500: '#00000029',
        600: '#C1C1BB',
        700: '#DDDDD9',
        800: '#D7D7D3',
      },
      blue: {
        100: '#4489EF',
        200: '#5E6D83',
        DEFAULT: '#1C3150',
        400: '#394553',
        500: '#2C2F35',
      },
      yellow: {
        DEFAULT: '#FABC33',
      },
    },
    fontFamily: {
      satoshi: ['var(--font-satoshi)'],
      sans: ['var(--font-satoshi)', ...defaultTheme.fontFamily.sans],
      reenie: ['var(--font-reenie)'],
    },
    extend: {
      padding: {
        4.5: '1.125rem',
        7.5: '4.375rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        23: '5.75rem',
        26: '6.5rem',
        34: '8.5rem',
      },
      margin: {
        4.5: '1.125rem',
        7.5: '4.375rem',
        13.5: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        23: '5.75rem',
        26: '6.5rem',
        34: '8.5rem',
      },
      fontSize: {
        headlineHp: [
          '64px',
          {
            lineHeight: '66px',
          },
        ],
        headline: [
          '80px',
          {
            lineHeight: '106px',
          },
        ],
        annotationHp: [
          '34px',
          {
            lineHeight: '38px',
          },
        ],
        headlineWithAnnotation: [
          '56px',
          {
            lineHeight: '74px',
          },
        ],
        h3: [
          '40px',
          {
            lineHeight: '53px',
          },
        ],
        h4: [
          '32px',
          {
            lineHeight: '43px',
          },
        ],
        overImage: [
          '40px',
          {
            lineHeight: '44px',
          },
        ],
      },
      boxShadow: {
        page: '0px 0px 20px #00000029',
        cards: '16px 16px 60px #1A293E17',
        card: '16px 16px 60px #1A293E29;',
      },
      gridTemplateRows: {
        page: '115px 1fr 66px',
      },
      gridTemplateColumns: {
        headerIlustaration: '445px 1fr',
      },
    },
  },
  plugins: [],
};
