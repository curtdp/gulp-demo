const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function sassTask() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
}

gulp.task('sass', sassTask);

gulp.task('sass:watch', function () {
  gulp.watch(['./src/sass/**/*.scss'], sassTask);
});