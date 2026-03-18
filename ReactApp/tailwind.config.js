/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', '../views/**/*.php'],
  theme: {
    extend: {
      colors: {
        primary: '#FF69B4',
        accent: {
          dark: '#6B1D4A',
          hover: '#000000',
        },
        dark: '#1F1F1F',
        gray: {
          light: '#f4f7f6',
          medium: '#666666',
        },
        warning: '#FFD700',
        cta: '#3C0F2E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
