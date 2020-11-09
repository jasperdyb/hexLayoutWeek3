"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

var MiniCssExtractPlugin = require("mini-css-extract-plugin");

var CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
    publicPath: "/src/"
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Home",
    filename: "index.html",
    template: "./template/page/home.pug"
  }), new HtmlWebpackPlugin({
    title: "Product",
    filename: "products-op.html",
    template: "./template/page/product-op.pug"
  }), new HtmlWebpackPlugin({
    title: "Product",
    filename: "products-sun.html",
    template: "./template/page/product-sun.pug"
  }), new MiniCssExtractPlugin(), new CopyPlugin(_defineProperty({
    patterns: [{
      from: "src/img",
      to: "src/img"
    }]
  }, "patterns", [{
    from: "src/icon",
    to: "src/icon"
  }]))],
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
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "/src/img",
          publicPath: "./src/img"
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
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};