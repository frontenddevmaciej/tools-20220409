const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  watch: true,
  entry: ['./src/main.js', './src/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [{
      test: /.scss$/,
      use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
    }
    ]
  }
};