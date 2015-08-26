/**
 * Created by Jackey Li on 2015/8/10.
 */
'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    jshint = require('gulp-jshint'),
    inject = require('gulp-inject'),
    watch = require('gulp-watch');

//sass的编译 gulp-ruby-sass
//自动添加css前缀 gulp-autoprefixer
//压缩css  gulp-minify-css
//js代码校验 gulp-jshint
//合并js代码 gulp-concat
//压缩js代码 gulp-uglify
//压缩图片 gulp-imagemin
//自动刷新页面 gulp-livereload
//图片缓存，只有图片替换了才压缩gulp-cache
//更改提醒 gulp-notify
//清除文件 del

gulp.task('index', function () {
    return gulp.src('./www/index.html')
        .pipe(inject(gulp.src('./www/**/*.js'), {read: false}), {relative: true})
        .pipe(gulp.dest('./www'));
});


//use jshint
gulp.task('jshint', function () {
    return gulp.src('www/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//use compress
gulp.task('compressJs', function () {
    return gulp.src('www/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dest'));
});

gulp.task('clean', function () {
    return gulp.src(['dest/*.js'], {read: false})
        .pipe(clean({force: true}));
});

//gulp.task('default', ['clean','compressJs']);
//gulp.task('default', ['jshint']);