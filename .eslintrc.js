module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-param-reassign': 'off',
    // Next.js use his own internal link system
    'jsx-a11y/anchor-is-valid': 'off',
    // _app.tsx uses spread operator and also, react-hook-form
    'react/jsx-props-no-spreading': 'off',
    // _document.tsx use render method without `this` keyword
    'class-methods-use-this': 'off',
    // #region  //*=========== Unused Import ===========
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // #endregion  //*======== Unused Import ===========
    // #region  //*=========== Import Sort ===========
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // `react` and `next` related packages come first
          ['^react', '^next'], // Then other packages and react-icons
          ['^@?\\w', '^react-icons'], // ext library & side effect imports
          ['^@?\\w', '^\\u0000'], // {s}css files
          ['^.+\\.s?css$'], // Lib and hooks
          ['^@/lib', '^@/hooks'], // static data
          ['^@/data'], // components
          ['^@/components', '^@/container'], // zustand store
          ['^@/store'], // Other imports
          ['^@/'], // relative paths up until 3 level
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          ['^@/types'], // other that didnt fit in
          ['^'],
        ],
      },
    ], // #endregion  //*======== Import Sort ===========
  },
  globals: {
    React: true,
    JSX: true,
  },
};
