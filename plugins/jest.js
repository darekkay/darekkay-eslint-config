/**
 *
 * Rules for eslint-plugin-jest
 * https://github.com/jest-community/eslint-plugin-jest#rules
 *
 * */
module.exports = {
  plugins: ["jest"],

  rules: {
    "jest/consistent-test-it": [
      "error",
      { fn: "test", withinDescribe: "test" },
    ],
    "jest/expect-expect": [
      "error",
      {
        assertFunctionNames: ["expect", "expectToThrow", "request.**.expect"],
      },
    ],
    "jest/lowercase-name": "off",
    "jest/max-expects": "off",
    "jest/max-nested-describe": ["error", { max: 3 }],
    "jest/no-alias-methods": "off",
    "jest/no-commented-out-tests": "error",
    "jest/no-conditional-expect": "error",
    "jest/no-conditional-in-test": "off",
    "jest/no-deprecated-functions": "error",
    "jest/no-disabled-tests": "off",
    "jest/no-done-callback": "error",
    "jest/no-duplicate-hooks": "error",
    "jest/no-export": "error",
    "jest/no-focused-tests": "error",
    "jest/no-hooks": "off",
    "jest/no-identical-title": "error",
    "jest/no-interpolation-in-snapshots": "off",
    "jest/no-jasmine-globals": "error",
    "jest/no-large-snapshots": ["error", { maxSize: 300 }],
    "jest/no-mocks-import": "error",
    "jest/no-restricted-jest-methods": "off",
    "jest/no-restricted-matchers": "off",
    "jest/no-standalone-expect": "error",
    "jest/no-test-prefixes": "error",
    "jest/no-test-return-statement": "off", // mostly because of supertest
    "jest/no-untyped-mock-factory": "off",
    "jest/prefer-called-with": "off",
    "jest/prefer-comparison-matcher": "error",
    "jest/prefer-each": "off",
    "jest/prefer-equality-matcher": "error",
    "jest/prefer-expect-assertions": "off",
    "jest/prefer-expect-resolves": "error",
    "jest/prefer-hooks-in-order": "off",
    "jest/prefer-hooks-on-top": "error",
    "jest/prefer-lowercase-title": ["error", { ignore: ["describe"] }],
    "jest/prefer-mock-promise-shorthand": "error",
    "jest/prefer-snapshot-hint": "off",
    "jest/prefer-spy-on": "off",
    "jest/prefer-strict-equal": "off",
    "jest/prefer-to-be": "error",
    "jest/prefer-to-be-null": "off",
    "jest/prefer-to-be-undefined": "off",
    "jest/prefer-to-contain": "error",
    "jest/prefer-to-have-length": "error",
    "jest/prefer-todo": "off",
    "jest/require-hook": "error",
    "jest/require-to-throw-message": "off",
    "jest/require-top-level-describe": "error",
    "jest/unbound-method": "off",
    "jest/valid-describe-callback": "error",
    "jest/valid-expect": "error",
    "jest/valid-expect-in-promise": "error",
    "jest/valid-title": "error",
  },
};
