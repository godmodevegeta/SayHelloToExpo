// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#0E1013', // A very dark, modern background
        'primary': {
          'DEFAULT': '#8A2BE2', // A vibrant, techy purple (BlueViolet)
          'light': '#9370DB',   // MediumPurple
        },
        'text': {
          'DEFAULT': '#E5E7EB', // Light Gray
          'muted': '#9CA3AF',   // Muted Gray
        },
        'card': '#1C1E22',       // A slightly lighter dark for cards
        'border': '#2D2F34',    // Border color for cards
      },
    },
  },
  plugins: [],
}