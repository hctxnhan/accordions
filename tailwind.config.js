/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        'inter-tight': ['Inter Tight', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
