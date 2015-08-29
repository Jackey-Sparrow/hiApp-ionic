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

var basePath = './www';

gulp.task('index', function () {
    //basePath + '/**/*.js' : all files in basePath
    //basePath + '/*/*.js' : the first level in basePath
    //basePath + '/*/*/*.js' : the second level in basePath
    //'!' + basePath + '/lib/*/*.js' : ignore the files

    //watch(basePath + '**/*.js', {base: basePath}, function () {
    return gulp.src('./build/index.html')

        .pipe(inject(gulp.src([basePath + '/app/**/*.css'], {read: false}), {
            name: 'css',
            addRootSlash: false
        }), {relative: true})

        .pipe(inject(gulp.src([basePath + '/*/*.js'], {read: false}), {
            name: 'module',
            addRootSlash: false
        }), {relative: true})

        .pipe(inject(gulp.src([basePath + '/platform/*/*.js'], {read: false}), {
            name: 'platform',
            addRootSlash: false
        }), {relative: true})


        .pipe(inject(gulp.src([basePath + '/*/*/*.js', '!' + basePath + '/lib/*/*.js', '!' + basePath + '/platform/*/*.js'], {read: false}), {
            name: 'submodule',
            addRootSlash: false
        }), {relative: true})
        .pipe(gulp.dest('./build'));
    // });

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
gulp.task('default', ['index']);