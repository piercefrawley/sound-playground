var
  gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  webpackServer = require('./webpack-server');

gulp.task('webpack-hot', webpackServer);

gulp.task('build_js', function() {
  return gulp.src("./sound.js")
          .pipe(webpack(require('./webpack.config.js')))
          .pipe(gulp.dest(".."));
});

gulp.task('default', ['build_js']);
gulp.task('dev', ['webpack-hot']);