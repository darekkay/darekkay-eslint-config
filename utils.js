module.exports = {
  IGNORE_PATTERNS: [],

  FILE_PATTERN_TESTING: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],

  FILE_PATTERN_TYPESCRIPT: ["**/*.ts", "**/*.tsx"],

  FILE_PATTERN_INTERNALS: ["**/internals/**/*.[jt]s?(x)"],

  /* Note: Not using *.config.js to make sure no production config file is affected */
  FILE_PATTERN_CONFIG: [
    ".babelrc.js",
    ".eslintrc.js",
    ".postcssrc.js",
    ".posthtmlrc.js",
    "babel.config.js",
    "gulpfile.js",
    "jest.config.js",
    "postcss.config.js",
    "posthtml.config.js",
    "rollup.config.js",
    "tailwind.config.js",
    "vite.config.js",
    "webpack.config.js",
  ],
};
