var gulp = require('gulp');
var compass = require('gulp-compass'),
  plumber = require('gulp-plumber');
var del = require('del');
var distFolder = './dist';

// SASS/Compass compiler
gulp.task('sass', function(done) {
  return gulp.src('sass/**/*.scss')
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        this.emit('end');
      }
    }))
    .pipe(compass({
      css: 'css',
      config_file: 'sass/compass.rb'
    }));
});

gulp.task('clean-dist', function() {
  return del([distFolder + '/*', '!' + distFolder + '/CNAME', '!' + distFolder + '/Web.config'], {
    force: true
  });
});

gulp.task('copy-dist', function() {
  return gulp.src(['./index.html',
      './fonts/**/*', './css/**/*', './images{,/!(flags)}/*', './locales/**/*', './favicons/**/*', './scripts/**/*'
    ], {
      base: './'
    })
    .pipe(gulp.dest(distFolder));
});

gulp.task('production', gulp.series('clean-dist', 'sass', 'copy-dist',
  function(done) {
    done();
  }));