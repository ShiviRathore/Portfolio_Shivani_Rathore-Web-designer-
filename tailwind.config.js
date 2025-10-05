/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'font1': ['Roboto', 'serif'],
        'font2': ['Noto Sans', 'Sans serif']
      },
      colors: {
        'purpal-t': '#73195f',
        'blue-t': 'rgb(24 11 89)',
      },
      fontSize: {
        '2xl': '24px',
        'lg': '18px',
        'xxl': '22px'
      },

    },
  },

  plugins: [],
}

