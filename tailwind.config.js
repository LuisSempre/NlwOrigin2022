  /* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
  // tailwind.config.js
  module.exports = {
    content: [
      // Example content paths...
      './*.html',
      './*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
      listStyleType: {
        'lower-alpha': 'lower-alpha'
      },
      fontFamily: {
        montserrat: "'Montserrat'",
        ...defaultTheme.fontFamily.mont
      },
      extend: {
        maxWidth: {
          container: '1200px'
        }
      }
    },
    plugins: []
  }
  