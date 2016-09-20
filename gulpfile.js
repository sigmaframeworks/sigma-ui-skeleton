var gulp = require('gulp');
var less = require('gulp-less');
var del = require('del');
var distFolder = '../dist';

// LESS Compiler
gulp.task('less-common', function(done) {
  return gulp.src('./less/**/*common*.less')
    .pipe(less({
      paths: ["./node_modules/sigma-ui-frameseven/less"]
    }))
    .pipe(gulp.dest('./css'));
});
gulp.task('less-ios', function(done) {
  return gulp.src('./less/**/*ios*.less')
    .pipe(less({
      paths: ["./node_modules/sigma-ui-frameseven/less", "./node_modules/framework7/src/less/ios"]
    }))
    .pipe(gulp.dest('./css'));
});
gulp.task('less-material', function(done) {
  return gulp.src('./less/**/*material*.less')
    .pipe(less({
      paths: ["./node_modules/sigma-ui-frameseven/less", "./node_modules/framework7/src/less/material"]
    }))
    .pipe(gulp.dest('./css'));
});
gulp.task('less', gulp.series('less-common', 'less-ios', 'less-material', function(done) {
  done();
}));

gulp.task('clean', function() {
  return del([distFolder + '/*', '!' + distFolder + '/CNAME'], {
    force: true
  });
});

gulp.task('dist', function() {
  return gulp.src(['index.html', 'blank.html', 'default.html',
      'node_modules/sigma-ui-frameseven/**/*.js',
      'node_modules/sigma-ui-frameseven/**/*.html',
      './fonts/**/*', './css/**/*', './images/**/*', './scripts/**/*'
    ], {
      base: './'
    })
    .pipe(gulp.dest(distFolder));
});

gulp.task('www', function() {
  return gulp.src(['index.html', 'blank.html',
      'node_modules/sigma-ui-frameseven/**/*.js',
      'node_modules/sigma-ui-frameseven/**/*.html',
      './fonts/**/*', './css/**/*', './images/**/*', './scripts/**/*'
    ], {
      base: './'
    })
    .pipe(gulp.dest('./www'));
});


gulp.task('production', gulp.series('clean', 'less', 'dist', 'www',
  function(done) {
    done();
  }));