module.exports = {
  extends: [
    '@remix-run/eslint-config',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  globals: {
    shopify: 'readonly',
  },
};
