/* eslint-env node */
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  target: "web",
  devtool: "source-map",
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "index.min.js",
    sourceMapFilename: "[file].map",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new BabiliPlugin(),
  ],
};
