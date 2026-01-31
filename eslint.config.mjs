import antfu from "@antfu/eslint-config"

export default antfu({
  type: "app",
  react: true,
  typescript: true,
  formatters: {
    prettierOptions: {
      printWidth: 120,
    },
  },
  stylistic: {
    indent: 2,
    quotes: "double",
  },
  ignores: [
    "**/route-tree.gen.ts",
  ],
  imports: {
    overrides: {
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/no-duplicates": ["error", { "prefer-inline": true }],
      "unused-imports/no-unused-imports": "error",
    },
  },
})
