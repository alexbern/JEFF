'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './_js/script.js',
    './_scss/style.scss'
  ],

  output: {
    path: './js/',
    filename: 'script.js' //JavaScript end point
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!postcss!sass?outputStyle=expanded')
      }
    ]
  },
  postcss: function(){

    return [

      require('autoprefixer-core')({
        browsers: ['IE >= 9', 'last 2 version'],
        cascade: false
      })

    ];

  },

  //webpack plugins
  plugins: [

    new webpack.optimize.DedupePlugin(),

    //extract CSS into seperate file
    new ExtractTextPlugin('../css/style.css')

  ],

  resolve: {
    extensions: ['', '.json', '.js', '.css']
  }

};
