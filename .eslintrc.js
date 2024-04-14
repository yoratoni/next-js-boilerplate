module.exports = {
    plugins: [
        "@typescript-eslint",
        "import"
    ],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/recommended"
    ],
    parser: "@typescript-eslint/parser",
    env: {
        browser: true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": "./tsconfig.json"
            }
        },
        "next": {
            "rootDir": "./"
        }
    },
    rules: {
        // General
        "indent": "off",
        "linebreak-style": ["error", "unix"],
        "quotes": ["warn", "double"],
        "semi": ["error", "always"],
        "object-curly-spacing": ["warn", "always"],
        "no-unused-vars": "off",
        "arrow-body-style": ["warn", "as-needed"],
        "import/no-unresolved": "error",
        "comma-dangle": ["error", "never"],
        "no-param-reassign": "warn",

        // TypeScript
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/indent": ["warn", 4, { "SwitchCase": 1 }],
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "off",

        // Next.js
        "@next/next/no-img-element": "warn",
        "@next/next/no-page-custom-font": "warn",
        "@next/next/no-sync-scripts": "warn",
        "@next/next/no-title-in-document-head": "warn",

        // React
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/button-has-type": "warn",
        "react/jsx-indent": ["warn", 4],
        "react/jsx-indent-props": ["warn", 4],
        "react/jsx-one-expression-per-line": "off",

        // Imports
        "import/no-useless-path-segments": ["warn", { noUselessIndex: true }],
        "import/newline-after-import": ["warn", {
            count: 2,
            considerComments: true,
            exactCount: true
        }],
        "sort-imports": [
            "warn",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                allowSeparatedGroups: true
            }
        ],
        "import/order": [
            "warn",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    ["sibling", "parent"],
                    "index",
                    "unknown"
                ],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                }
            }
        ]
    }
};
