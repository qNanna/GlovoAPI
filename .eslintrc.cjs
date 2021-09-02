module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-return-await': 'warn',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'max-params': 'warn',
    camelcase: 'off',
  },
};
