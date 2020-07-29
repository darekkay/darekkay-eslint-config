/**
 *
 * Rules for eslint-plugin-jest-dom
 * https://github.com/testing-library/eslint-plugin-jest-dom#supported-rules
 *
 * */
module.exports = {
  plugins: ["jest-dom"],

  rules: {
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-empty": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-focus": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
    "jest-dom/prefer-to-have-text-content": "error",
  },
};
