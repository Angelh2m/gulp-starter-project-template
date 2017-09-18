var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested= require('postcss-nested');


gulp.task('html', function () {
  console.log('html working');;
});


gulp.task('styles', function () {
  return gulp.src('./app/css/styles.css')
  .pipe(postcss([nested, cssvars, autoprefixer]))
  .pipe(gulp.dest('./app/temp/style.css'));
});

gulp.task('watch', function() {

    watch('./app/index.html', function() {
      gulp.start('html');
    });

    watch('./app/css/*.css',function () {
      gulp.start('styles');
    });
})
