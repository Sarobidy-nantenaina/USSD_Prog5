import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: { js },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.ts'],
    ...tseslint.configs.recommended[0],
  },
]);
