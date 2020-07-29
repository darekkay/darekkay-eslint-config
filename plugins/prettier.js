/**
 *
 * Rules for eslint-plugin-prettier
 * https://github.com/prettier/eslint-plugin-prettier
 *
 * */
module.exports = {
  extends: [
    "prettier",
    "prettier/react",
    "prettier/unicorn",
    "prettier/@typescript-eslint.js",
  ],

  plugins: ["prettier"],

  rules: {
    "prettier/prettier": "error",
  },
};
