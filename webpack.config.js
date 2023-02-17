const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathBundele = path.resolve(__dirname, 'bundle')

module.exports = {
  entry: "./src/index.js",
  devServer: {
    static: pathBundele,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "./index.html"
    }),
  ],
  output: {
    filename: "[contenthash].js",
    path: pathBundele,
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
