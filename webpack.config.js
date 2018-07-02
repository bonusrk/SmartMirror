const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const localeEnv = process.env.NODE_ENV === 'locale';
const prodEnv = process.env.NODE_ENV === 'production';
const devEnv = process.env.NODE_ENV === 'development';

const config = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle-[chunkhash].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: ['css-loader', 'less-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'postcss-loader' },
          'less-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
  ],
};

if (!localeEnv) config.plugins.push(new CleanWebpackPlugin('./dist'));

if (process.argv.includes('--analyze')) {
  config.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = config;
