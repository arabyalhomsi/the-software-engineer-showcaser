/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './renderer/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      '3xl': '2160px',
      paper: '8.5in',
      print: {
        raw: 'print',
      },
    },
    extend: {
      fontFamily: {
        serif: ['Kadwa', ...defaultTheme.fontFamily.sans],
      },
      scale: {
        scale: {
          120: '1.2',
          140: '1.4',
          160: '1.6',
        },
      },
    },
  },
  plugins: [],
};
