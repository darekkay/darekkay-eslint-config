/**
 *
 * Rules for @typescript-eslint/eslint-plugin
 * Contains only rules that do not require type information (= faster to run)
 *
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
 *
 * */
module.exports = {
  rules: {
    "import/no-unresolved": "off",
    "jest/no-export": "off",

    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-tslint-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/consistent-generic-constructors": "off",
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    // TODO: enable rule when the following issues had been addressed:
    // https://github.com/typescript-eslint/typescript-eslint/issues/4338
    // https://github.com/typescript-eslint/typescript-eslint/issues/4915
    "@typescript-eslint/consistent-type-imports": "off",
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error", // extension rule
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/init-declarations": "off", // extension rule
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "error", // extension rule
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": "off",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error", // extension rule
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error", // extension rule
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-empty-function": "off", // extension rule
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error", // extension rule
    "@typescript-eslint/no-invalid-void-type": "error",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error", // extension rule
    "@typescript-eslint/no-magic-numbers": "off", // extension rule
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-require-imports": "error",
    "no-restricted-imports": "off",
    "@typescript-eslint/no-restricted-imports": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error", // extension rule
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "after-used",
        ignoreRestSiblings: true,
      },
    ], // extension rule
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error", // extension rule
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error", // extension rule
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/no-var-requires": "error",
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "@typescript-eslint/parameter-properties": "off",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "off",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/sort-type-constituents": "off",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unified-signatures": "error",
  },
};
