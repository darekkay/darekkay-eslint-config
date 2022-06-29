# @darekkay/eslint-config

[![npm (scoped)](https://img.shields.io/npm/v/@darekkay/eslint-config?style=flat-square)](https://www.npmjs.com/package/@darekkay/eslint-config)
[![Build](https://img.shields.io/github/workflow/status/darekkay/darekkay-eslint-config/Continuous%20Integration/master?style=flat-square)](https://github.com/darekkay/darekkay-eslint-config/actions)
[![license](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/darekkay/darekkay-eslint-config/blob/master/LICENSE)

My shared ESLint configs.

## Usage

The configurations can be mixed, e.g. `React` + `TypeScript`.

For all configurations, install the following package:

```
yarn add -D @darekkay/eslint-config
```

You may require additional packages, depending on your environment:

```
# Babel
yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/eslint-parser

# TypeScript
yarn add -D typescript
```

## Configurations

Those configurations are ready-to-use:

- `@darekkay/eslint-config/react`: Config for React projects.
- `@darekkay/eslint-config/nodejs`: Config for Node (non-browser) projects. 
- `@darekkay/eslint-config/typescript`: Config for TypeScript projects.

### Common/plugin configs

Each plugin config can be imported individually:

- `@darekkay/eslint-config/base`: Native ESlint rules.
- `@darekkay/eslint-config/plugins/import`: Rules for [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import).
- `@darekkay/eslint-config/plugins/jest`: Rules for [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest).
- `@darekkay/eslint-config/plugins/jest-dom`: Rules for [eslint-plugin-jest-dom](https://www.npmjs.com/package/eslint-plugin-jest-dom).
- `@darekkay/eslint-config/plugins/node`: Rules for [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node).
- `@darekkay/eslint-config/plugins/react`: Rules for [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react), [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y).
- `@darekkay/eslint-config/plugins/testing-library`: Rules for [eslint-plugin-testing-library](https://www.npmjs.com/package/eslint-plugin-testing-library).
- `@darekkay/eslint-config/plugins/typescript-static`: Rules for [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) that do not require type information (= faster to run).
- `@darekkay/eslint-config/plugins/typescript-types`: Rules for [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) that require type information (= slower to run).
- `@darekkay/eslint-config/plugins/unicorn`: Rules for [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn).

## Errors vs. Warnings

ESLint _warnings_ can and often will be easily ignored. That's why this config treats all ESLint violations as _errors_.

## Similar projects

- [eslint-config-canonical](https://github.com/gajus/eslint-config-canonical)
- [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds)

### Unused plugins

There are some more useful ESLint plugins that are not (yet) part of this project.

- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)
- [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml)


## Resources

- [Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)
- [Shareable ESLint configs](https://eslint.org/docs/developer-guide/shareable-configs)
- [Support having plugins as dependencies in shareable config](https://github.com/eslint/eslint/issues/3458)
- [ESLint plugin/config explanation](https://gist.github.com/yangshun/318102f525ec68033bf37ac4a010eb0c)

## License

This project and its contents are open source under the [MIT license](LICENSE).
