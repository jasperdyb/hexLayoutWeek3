"use strict";

var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Home",
    filename: "index.html",
    template: "src/template/page/home.pug"
  }), new HtmlWebpackPlugin({
    title: "Product",
    filename: "products-op.html",
    template: "src/template/page/product-op.pug"
  }), new HtmlWebpackPlugin({
    title: "Product",
    filename: "products-sun.html",
    template: "src/template/page/product-sun.pug"
  }), new MiniCssExtractPlugin()],
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [MiniCssExtractPlugin.loader, // Translates CSS into CommonJS
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
    }, {
      test: /\.pug$/,
      use: "pug-loader"
    }]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
};