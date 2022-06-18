/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      animation: {
        fade: 'fade 500ms ease-in-out',
        'fade-up': 'fade-up 500ms ease-in-out'
      },
      keyframes: {
        fade: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        'fade-up': {
          from: {
            opacity: 0,
            transform: 'translateY(-20px)'
          },
          to: {
            opacity: 1,
            transform: 'translate(0)'
          }
        }
      }
    }
  },
  plugins: []
};
