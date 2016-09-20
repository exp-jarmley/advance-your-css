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
    modernizr = require('gulp-modernizr'),
    cmq = require('gulp-combine-media-queries'),
    connect = require('gulp-connect')
;

// Define static assets
var
    root = 'assets/',
    assets = {
        styles: root + '/styles/',
        scripts: root + '/scripts/'
    }
;

// Styles
gulp.task('styles', function(){
    return gulp.src(assets.styles + '/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      compress: true
    }))
    .pipe(gulp.dest(assets.styles));
});

// Modernizr
gulp.task('modernizr', function() {
  gulp.src([assets.styles + '/**/*.css', assets.scripts + '/app.js'])
    .pipe(modernizr({
        'options' : [
            'setClasses'
        ]
    }))
    .pipe(gulp.dest(assets.scripts))
});

// Server
gulp.task('server', function(){
    connect.server({
        port: 3000,
        root: './'
    });
});

// Watch
gulp.task('watch',function(){
    gulp.watch(assets.styles + '/less/**/*.less',['styles','modernizr']);
});

// Default
gulp.task('default', [
    'styles',
    'modernizr',
    'watch',
    'server'
]);