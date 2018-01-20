module.exports = {
    extends: ["airbnb", "plugin:flowtype/recommended"],
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    rules: {
        "indent": ["error", 4],
        "no-confusing-arrow": "off",
        "no-nested-ternary": "off",
        "no-case-declarations": "off",
        "no-mixed-operators": "off",
        "import/extensions": ["error", "never"],
        "import/prefer-default-export": "off",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/react-in-jsx-scope": "off",
        "react/style-prop-object": "off",
        "react/prop-types": "off"
    },
    // Vitaminjs variables
    globals: {
        "IS_CLIENT": false,
        "IS_SERVER": false
    },
    plugins: ["flowtype"]
}