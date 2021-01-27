/* eslint @typescript-eslint/no-var-requires: "off" */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
