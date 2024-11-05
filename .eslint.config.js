import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'prettier',
      'plugin:prettier/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
    ],
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['sibling', 'parent'],
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-extra-boolean-cast': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    ignores: ['node_modules'],
  },
];
