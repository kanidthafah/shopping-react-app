/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Neutral1': '#525252',
        'Neutral2': '#a3a3a3',
        'Gray': '#3b5563',
        'Gray2': '#52525b',
        'Sky': '#0369a1'
      },
      height: {
        'HeightFull': '100vh',
        'HeightST': '75vh',
        'HeightST2': '65vh',
        'HeightST3': '25vh'
      },
      borderWidth: {
        'BorderItem': '1px'
      }
    },
  },
  plugins: [],
}

