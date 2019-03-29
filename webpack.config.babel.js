import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const ROOT_PATH = path.resolve(SRC_DIR + '/app.js');
const COMPONENTS_PATH = path.resolve(SRC_DIR + '/components');
const REDUCERS_PATH = path.resolve(SRC_DIR + '/reducers');
const CONTAINERS_PATH = path.resolve(SRC_DIR + '/containers');
const ACTIONS_PATH = path.resolve(SRC_DIR + '/actions');

module.exports = {
  entry: ROOT_PATH,
  output: {
    path: DIST_DIR,
    filename: '[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Components: COMPONENTS_PATH,
      Containers: CONTAINERS_PATH,
      Reducers: REDUCERS_PATH,
      Actions: ACTIONS_PATH,
    },
    extensions: ['.jsx', '.js']
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin('main.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  mode: 'development',
  devtool: 'source-map'
};
