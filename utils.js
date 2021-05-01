module.exports = {
  IGNORE_PATTERNS: [".eslintrc.js", "babel.config.js", "jest.config.js"],

  FILE_PATTERN_TESTING: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],

  FILE_PATTERN_TYPESCRIPT: ["**/*.ts", "**/*.tsx"],
};
