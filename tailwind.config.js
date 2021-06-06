module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{ts,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'blue-primary': '#4D76B7',
        'gray-secondary': '#5B5B5B',
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        'white-gradient-start': 'rgba(255, 255, 255, 0.4)',
        'white-gradient-end': 'rgba(255, 255, 255, 0.1)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
