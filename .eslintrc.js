/* eslint-env node */
/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      files: ['*.js', '*.cjs'],
    env: {
      node: true
    },
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: 'off',
    quotes: 'off',
    "react/jsx-key": 'off',
    'no-unused-vars': 'warn',
    indent: ['off', 2],
    "space-before-function-paren": 'off',
    "react/prop-types": "off",
    camelcase: 0,
    "comma-dangle": 'off'
  }
}
