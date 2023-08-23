module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  globals: {
    Promise: true,
    _: true,
    async: true,
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-unused-vars": "off",
    "vue/no-unused-components": "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
