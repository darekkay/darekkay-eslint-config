/** Configuration for Node (non-browser) projects */
module.exports = {
  extends: ["./base", "./prettier"],

  env: {
    browser: false,
    es6: true,
    jest: true,
    node: true
  },

  plugins: ["import"],

  root: true
};
