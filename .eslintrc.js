module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    indent: ['error', 2],
    'max-len': [
      'warn',
      {
        code: 80,
      },
    ],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-labels': [
      'error',
      {
        allowLoop: true,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-restricted-syntax': ['error', 'ForInStatement', 'WithStatement'],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'],
      },
    ],
  },
};
