module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['standard', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/*.spec.js', '**/*.test.js'],
    },
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'sort-keys-fix'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'no-case-declarations': 'off',
    'no-prototype-builtins': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unescaped-entities': 'off',
    'react/sort-comp': [
      'error',
      {
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
        order: ['type-annotations', 'instance-variables', 'static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    semi: ['error', 'always'],
    'sort-keys': ['error', 'asc'],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
