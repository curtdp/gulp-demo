const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

function sassTask() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

gulp.task('sass', sassTask);

gulp.task('sass:watch', function () {
  gulp.watch(['./src/sass/**/*.scss'], sassTask);
});

// Static server
gulp.task('dev', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch(['./src/sass/**/*.scss'], sassTask);
  gulp.watch(['./*.html']).on('change', browserSync.reload);
})