/**
 * Configuration for Node (non-browser) projects
 * */
module.exports = {
  extends: [
    "./base",

    "./plugins/unicorn",
    "./plugins/node",

    "./plugins/prettier",
  ],

  env: {
    browser: false,
    es2020: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
  },

  root: true,
};
