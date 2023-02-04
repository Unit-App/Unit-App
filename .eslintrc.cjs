/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ["prettier", "eslint:recommended"],
    plugins: ["@typescript-eslint", "@tanstack/query"],
    parser: "@typescript-eslint/parser",
    reportUnusedDisableDirectives: true,
    ignorePatterns: [".eslintrc.js", "**/*.config.js", "**/*.config.cjs", "packages/config/**"],
    overrides: [
        {
            parserOptions: {
                requireConfigFile: false,
                ecmaFeatures: {
                    jsx: true,
                },
                tsconfigRootDir: __dirname,

                ecmaVersion: "latest",
                sourceType: "module",
                project: ["./tsconfig.json", "./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
            },
            files: ["**/*.ts", "**/*.tsx", "**/*.css", "**/*.d.ts", "**/*.ts", "**/*.js", "**/*.jsx"],
            rules: {
                "@typescript-eslint/unbound-method": [
                    "warn",
                    {
                        ignoreStatic: true,
                    },
                ],
                "@tanstack/query/exhaustive-deps": "error",
                "@tanstack/query/prefer-query-object-syntax": "error",
                "@typescript-eslint/no-unsafe-argument": "warn",
                "@typescript-eslint/no-unnecessary-condition": "warn",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-misused-promises": [
                    "warn",
                    {
                        checksVoidReturn: false,
                    },
                ],
                "@typescript-eslint/ban-ts-comment": "warn",
                "@typescript-eslint/prefer-ts-expect-error": "warn",
                //"@typescript-eslint/no-unsafe-return": "warn",
                //"@typescript-eslint/no-unsafe-call": "warn",
                //"@typescript-eslint/no-unsafe-member-access": "warn",
                "@typescript-eslint/no-unsafe-assignment": "warn",
                "@typescript-eslint/no-explicit-any": "warn",
                "@typescript-eslint/no-unused-vars": "warn",
                "@typescript-eslint/explicit-member-accessibility": ["warn"],
                "require-await": "warn",
                "@typescript-eslint/require-await": "warn",
            },
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:@typescript-eslint/strict",
                "plugin:@tanstack/eslint-plugin-query/recommended",
            ],
        },
    ],
};
