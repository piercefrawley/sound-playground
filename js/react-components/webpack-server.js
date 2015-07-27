var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var fs = require('fs');

var config = require('./webpack.hot.config');
module.exports = function() {
  var baseUrl = 'localhost';
  var compiler = webpack(config);
  var server = new WebpackDevServer(compiler, {
      contentBase: 'http://'+ baseUrl +':8080',
      hot: true,
      quiet: false,
      noInfo: false,
      lazy: false,
      watchDelay: 20,
      publicPath: 'http://'+ baseUrl +':8080/assets',
      stats: { colors: true },
  });
  server.listen(8080, baseUrl, function() {});
};