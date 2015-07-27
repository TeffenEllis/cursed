"use strict"

var
  ENVIRONMENT = process.env.NODE_ENV || "development",
  resolve = require("path").resolve

exports.devtool = "source-map"

exports.entry = {
  inject: "./app/inject.js",
  background: "./app/background.js"
}

exports.module = {
  loaders: [
    {test: /\.json$/, loader: "json-loader", exclude: [/node_modules/]},
    {test: /\.js$/, loader: "babel-loader?optional=runtime", exclude: [/node_modules/]}
  ],
  noParse: /\.min\.js/
}

exports.output = {
  filename: "[name].js",
  path: resolve(__dirname, "dist"),
  publicPath: "/",
  sourceMapFilename: "[name].map"
}

exports.plugins = []

exports.resolve = {
  modulesDirectories: [
    "app",
    "node_modules"
  ],
  extensions: [
    "",
    ".js",
    ".jsx",
    ".json"
  ]
}

if (ENVIRONMENT === "development") {
  exports.debug = true
  exports.devtool = "eval"

  exports.devServer = {
    contentBase: "./dist/"
  }
}
