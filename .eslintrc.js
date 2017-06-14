module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['node'],
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  rules: {
    'node/no-unsupported-features': 0,
    'node/exports-style': ['error', 'module.exports'],
    'node/no-unpublished-require': [
      'error',
      {
        allowModules: ['chai'],
      },
    ],
    'no-console': 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
  env: {
    node: true,
    mocha: true,
  },
};
