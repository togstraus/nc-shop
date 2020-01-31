module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx']}],
      'react/require-default-props': 'off',
      'arrow-parens': 'off',
    },
  };