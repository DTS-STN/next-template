module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Lato', 'sans-serif'],
        body: ['Noto sans', 'sans-serif'],
        extra: ['Patua One', 'cursive'],
      },
      colors: {
        current: 'currentColor',
      },
      backgroundImage: () => ({
        'footer-parliament-image': 'url(../../public/assets/landscape.png)',
      }),
      boxShadow: {
        card: '0px 2px 8px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
