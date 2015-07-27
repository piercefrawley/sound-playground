var webpack = require('webpack');
var path = require('path');
var baseUrl = 'localhost';

var plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.OldWatchingPlugin()
];

module.exports = {
  context: __dirname,

  entry: {
    sound: [
      'webpack-dev-server/client?http://'+ baseUrl +':8080/',
      'webpack/hot/only-dev-server',
      './sound.js'
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/public/assets/js',
    publicPath: 'http://'+baseUrl+':8080/assets'
  },

  plugins: plugins,

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot', 'babel-loader' ],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ["", ".js"],
    alias: {
      "react": __dirname + '/node_modules/react',
      "react/addons": __dirname + '/node_modules/react/addons'
    }
  },

  debug: true,

  devtool: 'eval-source-map'
};