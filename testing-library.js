module.exports = {
  extends: ["plugin:testing-library/recommended"],

  plugins: ["testing-library"],

  rules: {
    "testing-library/await-async-query": "error",
    "testing-library/await-async-utils": "error",
    "testing-library/await-fire-event": "error",
    "testing-library/no-dom-import": "error",
    "testing-library/no-manual-cleanup": "error",
    "testing-library/no-wait-for-empty-callback": "error",
    "testing-library/prefer-explicit-assert": "error",
    "testing-library/prefer-screen-queries": "error",
    "testing-library/prefer-wait-for": "error"
  }
};
