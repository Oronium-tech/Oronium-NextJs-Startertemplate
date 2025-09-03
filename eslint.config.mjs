import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // ✅ Naming conventions
      camelcase: ["error", { properties: "always" }], // enforce camelCase vars
      "new-cap": ["error", { newIsCap: true }], // enforce PascalCase for components
      "no-console": ["error", { allow: ["warn", "error"] }], // block console.log

      // ✅ Imports: enforce shared/ui vs feature-specific
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../*"],
              message:
                "❌ Avoid relative imports across features, use @/components/... instead.",
            },
          ],
        },
      ],
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
]

export default eslintConfig
