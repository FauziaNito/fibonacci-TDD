const os = require('os');

module.exports = {
  env: {
    node: true,
    es2021: true,
    mocha: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', os.EOL === '\r\n' ? 'windows' : 'unix'],
    'import/extensions': ['error', { js: 'ignorePackages' }],
  },
};
