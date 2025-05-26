/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#1F1F1F',
        'custom-border-gray': '#2D2D2D',
        'custom-blue': '#2D6BFF',
        'custom-text': '#F0F0F0',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}