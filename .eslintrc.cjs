module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  root: true,
  ignorePatterns: ['*.cjs', 'dist', 'node_modules'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    eqeqeq: 'error',
    curly: ["error", "all"]
  },
};
