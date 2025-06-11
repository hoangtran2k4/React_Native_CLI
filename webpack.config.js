const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: './index.web.js',
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['react-native-web'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.js', '.js', '.jsx', '.ts', '.tsx', '.mjs'],
    fullySpecified: false,
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],

  devServer: {
    static: './dist',
    hot: true,
    port: 1000,
    historyApiFallback: true,
  },
};
