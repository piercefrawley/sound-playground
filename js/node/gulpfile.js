var gulp = require('gulp'),

gulp.task('build_js', function() {
  return gulp.src("./app.js")
          .pipe(gulp.dest("../build"));
});

gulp.task('default', ['build_js']);