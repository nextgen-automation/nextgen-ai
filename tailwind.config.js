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
      }
    },
  },
  plugins: [],
}