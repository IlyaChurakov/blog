import js from '@eslint/js';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintI18next from 'eslint-plugin-i18next';
import eslintFsdPathChecker from 'eslint-plugin-ic-fsd-path-checker';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    plugins: {
      i18next: eslintI18next,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'typescript-eslint': tseslintPlugin,
      'ic-fsd-path-checker': eslintFsdPathChecker,
      'unused-imports': eslintUnusedImports,
    },
  },
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      '.fttemplates',
      '.github',
      '.husky',
      '.loki',
      'src/**/*.test.{ts,tsx}',
      'src/**/*.stories.{ts,tsx}',
      'scripts/*',
      '**/*.d.ts',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: {
      indent: ['error', 2],
      'react/jsx-indent': ['error', 2],
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-indent-props': ['error', 2],
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '_',
        },
      ],
      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,
          ignoreAttribute: 'data-testid',
          ignores: ['**/*.test.{ts,tsx}', '**/*.stories.{ts,tsx}'],
        },
      ],
      'no-extra-boolean-cast': 'off',
      'ic-fsd-path-checker/path-checker': ['error', { alias: '@' }],
      'ic-fsd-path-checker/public-api-imports': [
        'error',
        {
          alias: '@',
          testFilesPatterns: [
            '**/*.test.ts',
            '**/*.story.ts',
            '**/StoreDecorator.tsx',
          ],
        },
      ],
      'ic-fsd-path-checker/layer-imports': [
        'error',
        {
          alias: '@',
          ignoreImportPatterns: ['**/storeProvider/*'],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
    },
  },
];
