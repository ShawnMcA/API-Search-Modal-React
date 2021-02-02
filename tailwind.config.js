module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'main-app-width': '70vw'
      },

      height: {
        'main-app-height': '70vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
