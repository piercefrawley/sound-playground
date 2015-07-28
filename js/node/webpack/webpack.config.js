var webpack = require('webpack');
var plugins = [
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  new webpack.optimize.UglifyJsPlugin({minimize:true, sourceMap: true})
];

module.exports = {
  context: __dirname,

  entry: {
    app: './app.js',
    vendor: [
      "react",
      "react/addons",
      "react-router",
      "underscore",
      "q",
      "reflux",
      "moment"
    ]
  },

  output: {
    filename: '[name].bundle.js'
  },

  plugins: plugins,

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
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
  }
};