/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          background: '#040404',
          'background-purpose': '#12141D',
          'perk-gradient-light': 'rgba(4, 6, 14, 0.9)',
          'perk-gradient-dark': '#04060E',
        },
      },
      container: {
        center: true,
        padding: '2rem',
      },
      animation: {
        shimmering: 'shimmer 5s ease infinite',
        blob: 'blob 4s infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': {
            'background-size': '300% 300%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '300% 300%',
            'background-position': 'right center',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
}
