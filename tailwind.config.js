module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      current: 'currentColor',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
