import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,cjs,ts,jsx,tsx}"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "react/jsx-indent": [2, 4],
      "react/jsx-indent-props": [2, 4],
      "indent": [2, 4],
      "react/jsx-filename-extension": [2, {extensions: ['.js', '.jsx', '.tsx']}],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "react/require-default-props": "off",
      "@typescript-eslint/no-unused-vars": ["error", {
        "args": "all",
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  ...tseslint.configs.recommended,
];