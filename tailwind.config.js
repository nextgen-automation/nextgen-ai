/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
      height: {
        screen: ['100vh', '100dvh'],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      maxWidth: {
        'screen-2xl': '1440px',
        'screen-3xl': '1920px'
      },
      screens: {
        'ios': 'only screen and (max-width: 812px) and (-webkit-min-device-pixel-ratio: 2)',
        '2xl': '1440px',
        '3xl': '1920px'
      }
    },
  },
  plugins: [],
}