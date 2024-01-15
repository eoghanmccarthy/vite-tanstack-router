module.exports = {
  root: true,
  extends: ["@eoghanmccarthy"],
  ignorePatterns: ["dist", ".eslintrc.cjs", "src/routeTree.gen.ts"],
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
