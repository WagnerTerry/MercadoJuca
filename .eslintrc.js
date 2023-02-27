module.exports = {
    env: {
        es2020: true,
        browser: true
    },
    plugins: ["react", "prettier", "react-hooks", "jest"],
    extends: ["airbnb", "prettier", "prettier/react", "plugin:prettier/recommended", "plugin:jest/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: "module"
    },
    rules: {
        "react/jsx-filename-extension": [
            "warn",
            {
                extensions: [".jsx"]
            }
        ],

        // desejável ligar nas próximas fases
        "no-unused-vars": "warn",
        "no-underscore-dangle": "warn",
        "class-methods-use-this": "warn",
        "global-require": "warn",

        "no-undef": "error",
        "no-await-in-loop": "warn",
        "no-prototype-builtins": "warn",
        "prettier/prettier": "error",
        "import/no-unresolved": "warn",
        "prefer-const": "warn",
        "no-plusplus": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-no-undef": "off",
        "import/prefer-default-export": "off",
        "no-console": "off",
        "no-unused-expressions": [
            "off",
            {
                extensions: [".jsx"]
            }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-props-no-spreading": "off",
        "react/no-array-index-key": "warn"
    },
    settings: {
        "import/core-modules": ["ame-super-app-client", "ame-super-app-client-web"],
        react: {
            version: "17.0.2"
        }
    },
    overrides: [
        {
            files: ["**.jsx"],
            rules: {
                "no-undef": "off"
            }
        }
    ]
}
