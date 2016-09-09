var gulp = require('gulp');
var compass = require('gulp-compass'),
    plumber = require('gulp-plumber');
var del = require('del');
var distFolder = './dist';

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

gulp.task('clean', function() {
    return del([distFolder + '/*', '!' + distFolder + '/CNAME'], {
        force: true
    });
});

gulp.task('dist', function() {
    return gulp.src(['./index.html',
            'node_modules/sigma-ui-framework/dist/**/*.html',
            'node_modules/sigma-ui-framework/dist/**/*.js',
            './fonts/**/*', './styles/**/*', './images/**/*', './locales/**/*', './favicons/**/*', './scripts/**/*'
        ], {
            base: './'
        })
        .pipe(gulp.dest(distFolder));
});

gulp.task('production', gulp.series('clean', 'sass', 'dist',
    function(done) {
        done();
    }));