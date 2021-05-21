module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{ts,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'blue-thank-you': '#4D76B7',
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
