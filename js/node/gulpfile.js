var
  gulp = require('gulp'),
  websocket = require('websocket'),
  websocketServer = require('./websocket/server.js');

gulp.task('websocket', websocketServer);

gulp.task('build_js', function() {
  return gulp.src("./app.js")
          .pipe(webpack(require('./websocket/server.js')))
          .pipe(gulp.dest("./builds"));
});

gulp.task('default', ['build_js']);
gulp.task('dev', ['websocket']);