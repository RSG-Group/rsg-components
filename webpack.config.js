/* eslint-env node */
const BabiliPlugin = require("babili-webpack-plugin");

function generateExternals(externals) {
  const externalsObject = {};
  externals.map((external) => {
    externalsObject[external] = {
      commonjs: external,
      commonjs2: external,
      amd: external,
      root: external,
    };
    return true;
  });
  return externalsObject;
}

module.exports = {
  target: "web",
  devtool: "source-map",
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "index.min.js",
    sourceMapFilename: "[file].map",
    library: "RSGComponents",
    libraryTarget: "umd",
  },
  externals: generateExternals(["react", "react-dom", "lodash"]),
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
