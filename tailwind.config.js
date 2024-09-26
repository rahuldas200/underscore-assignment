/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        darkline: ['Darkline', 'sans-serif'],
        'sequel-sance':['Sequel sens','sans-serif']
      },
      screens: {
        // Custom breakpoints
        'xs': '475px', // Extra small devices (mobile)
        '3xl': '1600px', // Very large screens
      },
    },
    // Default Tailwind breakpoints (optional, but for reference)
    screens: {
      'sm': '640px',  // Small devices (landscape phones, 640px and up)
      'md': '768px',  // Medium devices (tablets, 768px and up)
      'lg': '1024px', // Large devices (laptops, 1024px and up)
      'xl': '1280px', // Extra-large devices (desktops, 1280px and up)
      '2xl': '1536px' // 2XL devices (larger desktops, 1536px and up)
    },
  },
  plugins: [],
}
