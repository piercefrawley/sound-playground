import express from 'express';
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import devServer from 'webpack-dev-server';
import config from './webpack.config.js';

const compiler = webpack(config);

/** Boot Static Server */

const app = express();

app.get('/*',(req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static('public'));

/** Webpack Server */
const server = new devServer(compiler, {
    contentBase: 'http://localhost:8081',
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    watchDelay: 20,
    publicPath: 'http://localhost:8081/build',
    stats: { colors: true },
});

server.listen(8081, 'localhost', function() {
  console.log('wepback dev server is listening on port 8081');
});

app.listen(8080);

