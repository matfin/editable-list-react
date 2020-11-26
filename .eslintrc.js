module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint',
    ],
    rules: {
      camelcase: 0,
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };