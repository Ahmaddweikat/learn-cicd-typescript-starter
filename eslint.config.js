import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } }, // ← make sure this says .node not .browser
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
