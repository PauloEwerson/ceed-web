/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'juicy-blue-space-light': 'rgb(20, 99, 150)',
      },
      backgroundImage: {
        'body-stars': "url('/public/bg/body-stars.svg')",
      },
    },
  },
  plugins: [],
}