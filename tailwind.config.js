/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      'hover-bg':'hsl(245, 83%, 68%)',
      'bright-blue':  'hsl(245, 75%, 52%)',
      'pale-blue': 'hsl(225, 100%, 94%)',
      'very-pale-blue':'hsl(225, 100%, 98%)',
      'desaturated-blue': 'hsl(224, 23%, 55%)',
      'dark-blue': 'hsl(223, 47%, 23%)',
      'transparent': 'transparent',
      'white': 'hsl(0, 0%, 100%)'
    },
    fontFamily:{
      'Red-hat-display':'Red Hat Display'
    },
    extend: {
      backgroundImage:{
        'background-pattern-mobile':"url(./dist/images/pattern-background-mobile.svg')",
        'background-pattern-desktop':"url('./dist/images/pattern-background-desktop.svg')"
      },
      width:{
        'container-width':'21.25rem'
      }
    },
  },
  plugins: [],
}
