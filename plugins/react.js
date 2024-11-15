/**
 *
 * Rules for multiple React plugins
 *
 * */
module.exports = {
  plugins: ["react", "react-hooks", "jsx-a11y"],

  rules: {
    "new-cap": "off",

    /**
     * eslint-plugin-react
     * https://www.npmjs.com/package/eslint-plugin-react
     * */
    "react/boolean-prop-naming": "off",
    "react/button-has-type": "error",
    "react/checked-requires-onchange-or-readonly": "off",
    "react/default-props-match-prop-types": "off",
    "react/destructuring-assignment": "off",
    "react/display-name": "error",
    "react/forbid-component-props": "off",
    "react/forbid-dom-props": "off",
    "react/forbid-elements": "off",
    "react/forbid-foreign-prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/forward-ref-uses-ref": "error",
    "react/function-component-definition": "off",
    "react/hook-use-state": "off",
    "react/iframe-missing-sandbox": "error",
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-child-element-spacing": "off", // handled by prettier
    "react/jsx-closing-bracket-location": "off", // handled by prettier
    "react/jsx-closing-tag-location": "off", // handled by prettier
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "ignore" },
    ],
    "react/jsx-curly-newline": "off", // handled by prettier
    "react/jsx-curly-spacing": "off", // handled by prettier
    "react/jsx-equals-spacing": "off", // handled by prettier
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/jsx-first-prop-new-line": "off", // handled by prettier
    "react/jsx-fragments": "error",
    "react/jsx-handler-names": "off",
    "react/jsx-indent": "off", // handled by prettier
    "react/jsx-indent-props": "off", // handled by prettier
    "react/jsx-key": "error",
    "react/jsx-max-depth": "off",
    "react/jsx-max-props-per-line": "off", // handled by prettier
    "react/jsx-newline": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-duplicate-props": "error",
    // TODO: turn on after this bug has been fixed: https://github.com/jsx-eslint/eslint-plugin-react/issues/3292
    "react/jsx-no-leaked-render": "off",
    "react/jsx-no-literals": "off",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": "off",
    "react/jsx-no-undef": "error",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-one-expression-per-line": "off", // handled by prettier
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "off", // handled by prettier
    "react/jsx-props-no-spread-multi": "error",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": [
      "error",
      {
        noSortAlphabetically: true,
        reservedFirst: ["key", "ref"],
      },
    ],
    "react/jsx-tag-spacing": "off", // handled by prettier
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off", // handled by prettier
    "react/no-access-state-in-setstate": "error",
    "react/no-adjacent-inline-elements": "error",
    "react/no-array-index-key": "off",
    "react/no-arrow-function-lifecycle": "error",
    "react/no-children-prop": "off",
    "react/no-danger": "off",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-invalid-html-attribute": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": "off",
    "react/no-namespace": "error",
    "react/no-object-type-as-default-prop": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-set-state": "off",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unstable-nested-components": "error",
    "react/no-unused-class-component-methods": "error",
    "react/no-unused-prop-types": "off",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "off",
    "react/prefer-exact-props": "off",
    "react/prefer-read-only-props": "off",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/require-optimization": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "off",
    "react/sort-default-props": "off",
    "react/sort-prop-types": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",

    /**
     * eslint-plugin-react-hooks
     * https://www.npmjs.com/package/eslint-plugin-react-hooks
     * */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    /**
     * eslint-plugin-jsx-a11y
     * https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
     * */

    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-ambiguous-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": ["error", { components: ["Link"] }],
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": ["error", { ignoreNonDOM: true }],
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/autocomplete-valid": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/control-has-associated-label": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/lang": "error",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-aria-hidden-on-focusable": "error",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
    "jsx-a11y/no-noninteractive-element-interactions": "error",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
    "jsx-a11y/no-noninteractive-tabindex": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "jsx-a11y/prefer-tag-over-role": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "error",
  },
};
