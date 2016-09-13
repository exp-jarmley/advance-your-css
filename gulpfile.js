/**
 * A set of gulp tasks to make
 * our lives easier
 */

// Include dependancies
var
    gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    cmq = require('gulp-combine-media-queries')
;

// Define static assets
var
    root = 'assets/',
    assets = {
        styles: root + '/styles/'
    }
;

// Styles
gulp.task('styles', function(){
    return sass('static/styles/sass/',{
        style: 'compressed',
        noCache: true
    })
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(cmq({
        log: true
    }))
    .pipe(gulp.dest('static/styles/'));
});

// Watch
gulp.task('watch',function(){
    gulp.watch('static/styles/sass/**/*.scss',['styles']);
});

// Default
gulp.task('default', [
    'styles',
    'watch'
]);