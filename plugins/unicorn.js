/**
 *
 * Rules for eslint-plugin-unicorn
 * https://github.com/sindresorhus/eslint-plugin-unicorn#rules
 *
 * */
module.exports = {
  plugins: ["unicorn"],

  rules: {
    "no-nested-ternary": "error",
    "unicorn/better-regex": "error",
    "unicorn/catch-error-name": "error",
    "unicorn/consistent-destructuring": "off",
    "unicorn/consistent-empty-array-spread": "error",
    "unicorn/consistent-existence-index-check": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/custom-error-definition": "off",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/empty-brace-spaces": "off", // handled by prettier
    "unicorn/expiring-todo-comments": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": "off",
    "unicorn/import-style": "off",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "off",
    "unicorn/no-anonymous-default-export": "off",
    "unicorn/no-array-callback-reference": "error",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-method-this-argument": "error",
    "unicorn/no-array-push-push": "error",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-await-expression-member": "error",
    "unicorn/no-await-in-promise-methods": "error",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-document-cookie": "error",
    "unicorn/no-empty-file": "off",
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-invalid-fetch-options": "error",
    "unicorn/no-invalid-remove-event-listener": "error",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-length-as-slice-end": "error",
    "unicorn/no-lonely-if": "off",
    "unicorn/no-magic-array-flat-depth": "error",
    "unicorn/no-negated-condition": "off",
    "unicorn/no-negation-in-equality-check": "error",
    "unicorn/no-nested-ternary": "error",
    "unicorn/no-new-array": "off",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-null": "off",
    "unicorn/no-object-as-default-parameter": "off",
    "unicorn/no-process-exit": "off",
    "unicorn/no-single-promise-in-promise-methods": "error",
    "unicorn/no-static-only-class": "error",
    "unicorn/no-thenable": "error",
    "unicorn/no-this-assignment": "off",
    "unicorn/no-typeof-undefined": "error",
    "unicorn/no-unnecessary-await": "error",
    "unicorn/no-unnecessary-polyfills": "error",
    "unicorn/no-unreadable-array-destructuring": "off",
    "unicorn/no-unreadable-iife": "error",
    "unicorn/no-unused-properties": "off",
    "unicorn/no-useless-fallback-in-spread": "error",
    "unicorn/no-useless-length-check": "error",
    "unicorn/no-useless-promise-resolve-reject": "error",
    "unicorn/no-useless-spread": "error",
    "unicorn/no-useless-switch-case": "error",
    "unicorn/no-useless-undefined": "error",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-array-flat": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-array-index-of": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-at": "off",
    "unicorn/prefer-blob-reading-methods": "error",
    "unicorn/prefer-code-point": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-default-parameters": "error",
    "unicorn/prefer-dom-node-append": "error",
    "unicorn/prefer-dom-node-dataset": "error",
    "unicorn/prefer-dom-node-remove": "error",
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-event-target": "off",
    "unicorn/prefer-export-from": "off",
    "unicorn/prefer-global-this": "off",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-json-parse-buffer": "off",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-logical-operator-over-ternary": "error",
    "unicorn/prefer-math-min-max": "error",
    "unicorn/prefer-math-trunc": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-modern-math-apis": "error",
    "unicorn/prefer-module": "off", // enable with Node 20+ min version
    "unicorn/prefer-native-coercion-functions": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-node-protocol": "error",
    "unicorn/prefer-number-properties": "off",
    "unicorn/prefer-object-from-entries": "off",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-prototype-methods": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "off",
    "unicorn/prefer-regexp-test": "error",
    "unicorn/prefer-set-has": "error",
    "unicorn/prefer-set-size": "error",
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-string-raw": "off",
    "unicorn/prefer-string-replace-all": "off",
    "unicorn/prefer-string-slice": "off",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-structured-clone": "error",
    "unicorn/prefer-switch": "off",
    "unicorn/prefer-ternary": "off",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/relative-url-style": "off",
    "unicorn/require-array-join-separator": "error",
    "unicorn/require-number-to-fixed-digits-argument": "error",
    "unicorn/require-post-message-target-origin": "error",
    "unicorn/string-content": "off",
    "unicorn/switch-case-braces": "off",
    "unicorn/template-indent": "off",
    "unicorn/text-encoding-identifier-case": "error",
    "unicorn/throw-new-error": "error",
  },
};
