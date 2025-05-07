import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import { defineConfig } from "eslint/config";
/* Ugly work around to use expo's linting config */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const expoConfig = require("eslint-config-expo/flat");

export default defineConfig([
  // Apply `Expo` config
  expoConfig,
  // Apply recommended rules to TS files
  ...tseslint.configs.recommended,
  // Apply Prettier rules
  eslintConfigPrettier,
  // Add unused imports plugin
  {
    plugins: {
      "unused-imports": unusedImports,
    },
  },
  // Additional rules
  {
    rules: {
      "linebreak-style": ["error", "unix"],
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        // Underscore prefixed variable are valids
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ["node_modules/*", "/.expo"],
  },
]);
