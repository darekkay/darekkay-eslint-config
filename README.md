# @darekkay/eslint-config

My shared ESLint configs.

## Usage

The configurations can be mixed, e.g. `React` + `TypeScript`.

For all configurations, those packages have to be installed:

```
yarn add -D eslint @darekkay/eslint-config eslint-plugin-import eslint-plugin-prettier 
```

You may require additional packages, depending on the environment.

## Configurations


### React

- `@darekkay/eslint-config/react`

Configuration for React projects.

```
yarn add -D babel-eslint eslint-plugin-react eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-testing-library
```

### Node

- `@darekkay/eslint-config/node`

Configuration for Node (non-browser) projects.

### TypeScript

- `@darekkay/eslint-config/typescript`

Configuration for TypeScript projects.

```
yarn add -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Base

- `@darekkay/eslint-config/base`

Base rules for all configurations.

### Prettier

- `@darekkay/eslint-config/prettier`

Prettier formatting.

### Testing Library

- `@darekkay/eslint-config/testing-library`

Rules for @testing-library.

## Errors vs. Warnings

ESLint _warnings_ can and often will be easily ignored. That's why this config treats most ESLint violations as _errors_.

## Publish steps

```
$ npm publish --access public
```

## Resources

- [Shareable ESLint configs](https://eslint.org/docs/developer-guide/shareable-configs)
- [Support having plugins as dependencies in shareable config](https://github.com/eslint/eslint/issues/3458)
- [ESLint plugin/config explanation](https://gist.github.com/yangshun/318102f525ec68033bf37ac4a010eb0c)
