var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8081/',
      'webpack/hot/dev-server',
      './entry.js',
    ],
  },

  output: {
    path: '/dist',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8081/build/',
  },

  module: {
    loaders: [
      { test: [/\.js$/, /\.jsx$/], loaders: ['react-hot', 'babel-loader?stage=0'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader?indentedSyntax' },
    ],
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx', '.json', '.css', '.sass'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  debug: true,

  devtool: 'eval-source-map',
};