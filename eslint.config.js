import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    typescript: true,
    javascript: true,
  },
  {
    ignores: [
      'node_modules/',
      '**/node_modules/**/',
      'pnpm-lock.yaml',
      '**/pnpm-lock.yaml/**',
    ],
  },
  {
    rules: {
      'default-case': 'error',
      'no-unsafe-finally': 'error',
      'no-trailing-spaces': 'warn',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-types': 'off',
      'no-html-link-for-pages': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-console': 'off',
      'sort-imports': ['error', {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      }],
    },
  },
)
