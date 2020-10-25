/**
 *
 * Rules for eslint-plugin-testing-library
 * https://github.com/testing-library/eslint-plugin-testing-library
 *
 * */
module.exports = {
  plugins: ["testing-library"],

  rules: {
    "testing-library/await-async-query": "error",
    "testing-library/await-async-utils": "error",
    "testing-library/await-fire-event": "error",
    "testing-library/consistent-data-testid": "off",
    "testing-library/no-await-sync-query": "off",
    "testing-library/no-debug": "error",
    "testing-library/no-dom-import": ["error", "react"],
    "testing-library/no-manual-cleanup": "error",
    "testing-library/no-render-in-setup": "off",
    "testing-library/no-wait-for-empty-callback": "error",
    "testing-library/no-wait-for-snapshot": "error",
    "testing-library/prefer-explicit-assert": "error",
    "testing-library/prefer-find-by": "error",
    "testing-library/prefer-presence-queries": "error",
    "testing-library/prefer-screen-queries": "error",
    "testing-library/prefer-wait-for": "error",
  },
};
