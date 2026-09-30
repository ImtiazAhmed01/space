import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'

export default [
  // Ignore build output
  { ignores: ['dist', 'node_modules'] },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: '19' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // ESLint recommended base rules
      ...js.configs.recommended.rules,

      // React recommended rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules, // React 17+ JSX transform (no need to import React)

      // React Hooks rules (mirrors what oxlintrc had)
      ...reactHooks.configs.recommended.rules,

      // React Refresh (Vite HMR safety)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Disabled: prop-types are redundant in modern React with JSDoc/TS annotations
      'react/prop-types': 'off',
    },
  },
]
