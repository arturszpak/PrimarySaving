module.exports = {
  mode: 'jit',
  content: [".pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
