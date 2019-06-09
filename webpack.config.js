const path = require('path');

const outputDirectory = 'dist';

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:
  {
    'home': path.join(__dirname, 'client/views/home/home.js'),
    'aboutus': path.join(__dirname, 'client/views/about-us/about-us.js'),
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};