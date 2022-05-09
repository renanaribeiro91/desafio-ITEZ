module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    [
      "@babel/plugin-transform-modules-commonjs",
      {
        allowTopLevelThis: true,
        loose: true,
        lazy: true,
      },
    ],
    [
      "module-resolver",
      {
        alias: {
          "@config": "./src/config",
          "@models": "./src/models",
          "@controllers": "./src/controllers",
          "@views": "./src/views",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
