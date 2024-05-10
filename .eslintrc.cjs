/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'perfectionist'],
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
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'perfectionist/sort-interfaces': 'error',
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        'groups': [
          'react',
          'internal-components',
          'custom-components',
          'custom-config',
          'custom-features',
          'custom-hooks',
          'custom-lib',
          'custom-providers',
          'custom-routes',
          'custom-stores',
          'custom-types',
          'custom-utils',
          'external'
        ],
        'custom-groups': {
          value: {
            'react': ['react', 'react-dom/*', 'react-redux', 'react-router-dom', '@reduxjs/**'],
            'internal-components': './**',
            'custom-components': '@/components/**',
            'custom-config': '@/config/**',
            'custom-features': '@/features/**',
            'custom-hooks': '@/hooks/**',
            'custom-lib': '@/lib/**',
            'custom-providers': '@/providers/**',
            'custom-routes': '@/routes/**',
            'custom-stores': '@/stores/**',
            'custom-types': '@/types/**',
            'custom-utils': '@/utils/**'
          }
        },
        'internal-pattern': [
          '@/**'
        ]
      }
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc'
      }
    ]
  },
}
