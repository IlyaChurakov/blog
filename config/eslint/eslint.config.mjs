import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";
import reactHooks from 'eslint-plugin-react-hooks'

/** @type {import('eslint').Linter.Config[]} */
export default [
  i18next.configs['flat/recommended'],
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    files: ["**/*.{js,cjs,ts,jsx,tsx}"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "react/jsx-indent": [2, 4],
      "react/jsx-indent-props": [2, 4],
      "indent": [2, 4],
      "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "react/require-default-props": "off",
      "@typescript-eslint/ban-ts-comment": ["off"],
      "react/display-name": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "i18next/no-literal-string": ['error', { markupOnly: true, ignoreAttribute: ['data-testid'] }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/src/**/*.test.{ts,tsx}", "**/src/**/*.stories.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": [0]
    }
  },
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  ...tseslint.configs.recommended,
];
