/** Configuration for Node (non-browser) projects */
module.exports = {
  extends: ["./base", "./prettier"],

  env: {
    browser: false,
    es2020: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2020,
  },

  plugins: ["import"],

  root: true
};
