const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/main.js"), // укажите путь к Вашему файлу main.js
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"), // директория для сборки
  },
  plugins: [
    new CleanWebpackPlugin(), // очищает директорию сборки
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "build" }, // копирование файлов из public в build
      ],
    }),
  ],
  devtool: "source-map", // генерирует source-maps
};
