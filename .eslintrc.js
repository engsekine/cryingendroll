module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'next/core-web-vitals', 'google', 'prettier'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ["*.config.js"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'semi': ['error', 'never', {beforeStatementContinuationChars: 'never'}],
    'semi-style': ['error', 'first'],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'require-jsdoc': ['off'],
    'spaced-comment': ['off'],
    'max-len': ['off'],
  },
  root: true,
}
