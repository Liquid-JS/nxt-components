var gulp = require('gulp');
var inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('default', function () {
  var result = gulp.src('../tmp/ngx-json-view/**/*.ts')
    .pipe(inlineNg2Template({ useRelativePaths: true }));

  return result
    .pipe(gulp.dest('../tmp/ngx-json-view'));
});
