module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': ['warn'],
    'no-empty': ['error'],
    'no-empty-function': ['error'],
    'eqeqeq': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'camelcase': ['error'],
    'jsx-quotes': ['error', 'prefer-single'],
    'semi': ['error', 'never'],
    'indent': ['error', 2]
  },
}
