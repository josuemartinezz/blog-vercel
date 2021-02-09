module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
