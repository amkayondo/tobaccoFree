module.exports = {
  "parser": "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-unused-vars": 0,
    "react/no-unused-state": 0,
    "no-unused-expressions": 0,
    "quotes": 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
    "linebreak-style": 0,
    "react/prefer-stateless-function": 0,
    "radix": 0
  },
};
