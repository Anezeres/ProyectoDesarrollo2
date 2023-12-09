/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      
      // that is animation class
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0, transform : 'translateY(-20px)' },
          '100%': { opacity: 1, transform : 'translateY(0px)' },
        },
      }),
    },
  },
  plugins: [],
}
