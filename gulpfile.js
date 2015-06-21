'use strict';

var browserify = require('browserify');
var connect = require('gulp-connect');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var reactify = require('reactify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var imageResize = require('gulp-image-resize');
var uglify = require('gulp-uglify');




function swallowError(error) {
    console.error(error.toString());
}

gulp.task('server', function () {
    connect.server({
        root: ['dist'],
        port: 8001,
        livereload: true
    });
});

gulp.task('sass', function () {
    gulp.src('./app/app.scss')
        .pipe(sass({includePaths: ['./node_modules/react_image_gallery']}))
        .on('error', swallowError)
        .pipe(rename('app.css'))
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload());
});

gulp.task('images', function () {
    gulp.src('assets/images/**/*')
        .pipe(imageResize({
            width : 100,
            height : 100,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest('./dist/images/small'));
});

gulp.task('scripts', function() {
    watchify(browserify({
        debug: true,
        entries: ['./app/app.js'],
        extensions: ['.jsx'],
        transform: [reactify]
    }))
        .bundle()
        .on('error', swallowError)
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload());
});

gulp.task('compress', function() {
    gulp.src('dist/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});
/*
gulp.task('build', function() {
    browserify({
        entries: ['./src/ImageGallery.react.jsx'],
        transform: [reactify],
        standalone: 'ImageGallery'
    })
        .external('react/addons')
        .bundle()
        .on('error', swallowError)
        .pipe(source('image-gallery.js'))
        .pipe(gulp.dest('./build/'));
});
*/
var fs = require('fs'),
    path = require('path');

gulp.task("generate_image_paths", function(){
    function evaluatefs(filename) {
        var stats = fs.lstatSync(filename), info = {};
        if (stats.isDirectory()) {
            fs.readdirSync(filename).map(function(child) {
                console.log(filename + '/' + child);
                info[child] = evaluatefs(filename + '/' + child);
            });
        } else {
          return filename;
        }
        return info;
    }
    var t = evaluatefs('dist/images');
    console.log(t);
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['app/*.scss','app/**/*.scss'], ['sass']);
    gulp.watch(['app/*.jsx', 'app/*.js'], ['scripts']);
});

gulp.task('default', ['watch', 'scripts', 'sass', 'server']);
