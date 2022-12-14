/*
|-------------------------------------------------------------------------------
| Tailwind – The Utility-First CSS Framework
|-------------------------------------------------------------------------------
|
| Documentation at https://tailwindcss.com
|
*/

const colors = require('tailwindcss/colors');

/**
 * Configuration
 */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    // Rounded corner classes are generated dynamically
    'rounded-tl-[22px]',
    'rounded-tr-[22px]',
    'rounded-bl-[22px]',
    'rounded-br-[22px]',
    'rounded-tl-[30px]',
    'rounded-tr-[30px]',
    'rounded-bl-[30px]',
    'rounded-br-[30px]',
    'rounded-tl-[40px]',
    'rounded-tr-[40px]',
    'rounded-bl-[40px]',
    'rounded-br-[40px]',
    'rounded-tl-[100px]',
    'rounded-tr-[100px]',
    'rounded-bl-[100px]',
    'rounded-br-[100px]',
  ],
  theme: {
    colors: {
      primary: '#F9AA7D',
      white: '#fff',
      black: '#454342',
      blueblack: '#3C4557',
      cream: '#F6F1EB',
      gray: colors.gray,
      transparent: 'transparent',
      current: 'currentColor',
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1320px', //1256
      xxl: '1400px', //1256px
    },
    fontFamily: {
      sans: [
        '"Mulish"',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
      serif: ['"Prata"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    fontSize: {
      50: '0.75rem', // 12px - 50
      100: '0.8125rem', // 13px - 100
      200: '0.875rem', // 14px - 200
      300: '0.9375rem', // 15px - 300
      400: '1rem', // 16px - 400
      500: '1.0625rem', // 17px - 500
      600: ['1.1875rem', '1.4'], // 19px - 600
      650: ['1.25rem', '1.4'], // 20px - 650
      700: ['1.375rem', '1.4'], // 22px - 700
      750: ['2rem', '1.2'], // 32px - 750
      800: ['2.625rem', '1.1'], // 42px - 800
      900: ['5.25rem', '5.5rem'], // 84px - 900
    },
    letterSpacing: {
      wide: '.075em',
    },
    dropShadow: {
      'tiny': '0 2px 0 rgba(69,67,66, 0.1)',
    },

    extend: {
      spacing: {
        4.25: '1.0625rem', //17px
        18: '4.5rem',
      },
    },
  },
  variants: {
    // Define variants
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
