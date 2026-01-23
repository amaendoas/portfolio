import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: pluginReact,
      prettier,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': 'error',
    },
  },

  // React recommended rules
  pluginReact.configs.flat.recommended,

  // Disable ESLint rules that conflict with Prettier
  js.configs.recommended,
])
