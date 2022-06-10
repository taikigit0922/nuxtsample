module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    // component名が単一名でも許可する
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index', 'new', 'edit', '_id'], // 任意で追加
      },
    ],
  },
}