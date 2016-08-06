var gulp = require('gulp');
var compass = require('gulp-compass'),
    plumber = require('gulp-plumber');

// SASS/Compass compiler
gulp.task('sass', function(done) {
    if (compass) {
        return gulp.src('./sass/*.scss')
            .pipe(plumber({
                errorHandler: function(error) {
                    console.log(error.message);
                    this.emit('end');
                }
            }))
            .pipe(compass({
                css: 'styles',
                config_file: './sass/compass.rb'
            }));
    }
    done();
});

gulp.task('dist', function() {
    return gulp.src(['./index.html', './browserconfig.xml', './manifest.json', 'node_modules/sigma-ui-framework/**/*',
            './fonts/**/*', './markdown/**/*', './styles/**/*', './images/**/*', './scripts/**/*'
        ], {
            base: './'
        })
        .pipe(gulp.dest('./dist'));
});

gulp.task('production', gulp.series('sass', 'dist'));
