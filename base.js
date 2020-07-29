/**
 *
 * Base rules for all configurations
 * https://eslint.org/docs/rules
 *
 * */
module.exports = {
  rules: {
    /**
     * Possible Errors
     * https://eslint.org/docs/rules/#possible-errors
     */
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": "error",
    "use-isnan": "error",
    "valid-typeof": ["error", { requireStringLiterals: true }],

    /**
     * Best Practices
     * https://eslint.org/docs/rules/#best-practices
     */
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "off",
    complexity: ["error", { max: 14 }],
    "consistent-return": "error",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    eqeqeq: "error",
    "grouped-accessor-pairs": "off",
    "guard-for-in": "error",
    "max-classes-per-file": "off",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-div-regex": "off",
    "no-else-return": "off",
    "no-empty-function": "off",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "off",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": "off",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": [
      "error",
      { terms: ["fixme"], location: "anywhere" },
    ],
    "no-with": "error",
    "prefer-named-capture-group": "error",
    "prefer-promise-reject-errors": "off",
    "prefer-regex-literals": "off",
    radix: "error",
    "require-await": "off",
    "require-unicode-regexp": "off",
    "vars-on-top": "error",
    yoda: "error",

    /**
     * Strict Mode
     * https://eslint.org/docs/rules/#strict-mode
     */
    strict: "off",

    /**
     * Variables
     * https://eslint.org/docs/rules/#variables
     */
    "init-declarations": "off",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "off",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        args: "after-used",
        ignoreRestSiblings: true,
      },
    ],
    "no-use-before-define": "error",

    /**
     * Stylistic Issues
     * https://eslint.org/docs/rules/#stylistic-issues
     */
    camelcase: "error",
    "capitalized-comments": "off",
    "consistent-this": "off",
    "func-name-matching": "off",
    "func-names": "off",
    "func-style": "off",
    "id-denylist": ["error", "data", "e", "err", "cb"],
    "id-length": "off",
    "id-match": "off",
    "line-comment-position": "off",
    "lines-between-class-members": "error",
    "max-depth": ["error", 5],
    "max-lines": "off",
    "max-lines-per-function": ["error", 150],
    "max-nested-callbacks": ["error", 7],
    "max-params": ["error", 7],
    "max-statements": ["error", 40],
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "new-cap": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-ternary": "off",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "one-var": ["error", "never"],
    "operator-assignment": "off",
    "padding-line-between-statements": "off",
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "spaced-comment": ["error", "always"],

    /**
     * ECMAScript 6
     * https://eslint.org/docs/rules/#ecmascript-6
     */
    "constructor-super": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-restricted-exports": "off",
    "no-restricted-imports": "off",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": ["error", "properties"],
    "prefer-const": "error",
    "prefer-destructuring": ["error", { object: true, array: false }],
    "prefer-numeric-literals": "off",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "sort-imports": "off",
    "symbol-description": "error",
  },
};
