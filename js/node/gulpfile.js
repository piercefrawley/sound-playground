var gulp = require('gulp'); 
var webpack = require('gulp-webpack');

gulp.task('build_js', function() {
  return gulp.src("./components.js")
          .pipe(gulp.dest("../build"));
});

// TODO: Implement Webpack-Config'
//gulp.task('dev', ['webpack']);

gulp.task('default', ['build_js']);