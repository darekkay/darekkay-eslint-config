/**
 *
 * Rules for @typescript-eslint/eslint-plugin
 * Contains only rules that require type information (= slower to run)
 *
 * https://typescript-eslint.io/rules/
 *
 * */
module.exports = {
  rules: {
    "@typescript-eslint/await-thenable": "off",
    "dot-notation": "off",
    "consistent-return": "off",
    "@typescript-eslint/consistent-return": "error", // extension rule
    "@typescript-eslint/consistent-type-exports": "off",
    "@typescript-eslint/dot-notation": "error", // extension rule
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-array-delete": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-deprecated": "off",
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-meaningless-void-operator": "off",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-template-expression": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-parameters": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-enum-comparison": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-unary-minus": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/only-throw-error": "error",
    "prefer-destructuring": "off",
    "@typescript-eslint/prefer-destructuring": [
      "error",
      {
        object: true,
        array: false,
      },
    ], // extension rule
    "@typescript-eslint/prefer-find": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-promise-reject-errors": "off", // extension rule
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/require-await": "off", // extension rule
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/return-await": "off", // extension rule
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/use-unknown-in-catch-callback-variable": "off",
  },
};
