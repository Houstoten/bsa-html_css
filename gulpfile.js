'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass');

sass.compiler = require('node-sass');

function sassCompile() {
  return gulp.src('./main/sass/style.sass')
    .pipe(sass.sync({ outputStyle: 'extended' }).on('error', sass.logError))
    .pipe(gulp.dest('./main/css'));
}

function watch() {
  gulp.watch('./main/sass/**/*.sass', sassCompile);
}

exports.compile = sassCompile
exports.watch = watch