// var helpers = require('./helpers');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        exclude: path.join(path.resolve(__dirname, '..'), 'src', 'app'),
        loader: 'null'
      },
      {
        test: /\.css$/,
        include: path.join(path.resolve(__dirname, '..'), 'src', 'app'),
        loader: 'raw'
      }
    ]
  }
}
