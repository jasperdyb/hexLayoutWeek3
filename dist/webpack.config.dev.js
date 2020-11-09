"use strict";

//webpack.config.js
var path = require("path");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [// Creates `style` nodes from JS strings
      "style-loader", // Translates CSS into CommonJS
      "css-loader", // Compiles Sass to CSS
      "sass-loader"]
    }, {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        // 直接配置 url-loader 就好，超過上限的資源會自動 fallback 給 file-loader
        loader: "url-loader",
        options: {
          name: "img/[name].[ext]"
        }
      }]
    }]
  }
};