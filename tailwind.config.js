/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens : {
      sm : '450px',
      xl : '1440px'
    },
    colors :{
     'strong-cyan' : 'hsl(171, 66%, 44%)',
     'light-blue' : 'hsl(233, 100%, 69%)',
     'dark-grayish-blue' : 'hsl(210, 10%, 33%)',
     'grayish-blue': 'hsl(201, 11%, 66%)',
     'white' : '#fff',
     'light-gray' : 'rgba(203, 204, 204, .25)',
    },
    fontFamily : {
      fontBai : ['Bai Jamjuree', 'sans-serif']
    },
    minWidth : {
      's' : '360px',
      'l' : '680px',
    },
    extend: {
      boxShadow : {
        'cyan' : '0 2px 6px hsl(171, 66%, 44%)',
        'blue' : '0 2px 6px hsl(233, 100%, 69%)',
      }
    },
  },
  plugins: [],
}

