module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
      filter: ['hover', 'focus','group-hover'],
      transform: ['group-hover'],
    },
  },
  plugins: [],
};
