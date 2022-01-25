module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "prefer-template": "off",
    "react/function-component-definition": "off",
    "arrow-body-style": "off",
    "no-shadow": "warn",
    "jsx-a11y/label-has-for": "off",
    "react/jsx-no-constructed-context-values": "off",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
  },
};
