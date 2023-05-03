module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: { // 0 = off, 1 = warn, 2 = error
    quotes: ['error', 'single'],
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/member-delimiter-style': 2,
  },
};
