const { IGNORE_PATTERNS, FILE_PATTERN_TESTING } = require("./utils");

/**
 * Configuration for Node (non-browser) projects
 * */
module.exports = {
  extends: [
    "./base",

    "./plugins/import",
    "./plugins/node",
    "./plugins/unicorn",

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

  ignorePatterns: IGNORE_PATTERNS,

  overrides: [
    {
      // Enable testing rules only for test files
      files: FILE_PATTERN_TESTING,
      extends: ["./plugins/jest"],
    },
  ],
};
