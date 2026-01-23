import js from "@eslint/js"
import globals from "globals"
import prettier from "eslint-plugin-prettier"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"

export default defineConfig([
  pluginReact.configs.flat.recommended,
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: pluginReact,
      prettier,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": "error",
    },
  },
])
