'use strict';

const global = require('../global.js');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');

global.gulp.task('image', function () {
    return global.gulp.src(global.srcPath + '/img/**/*.{jpg,jpeg,png,gif,svg}')
        .pipe(global.$.plumber())
        .pipe(global.$.imagemin([
            mozjpeg({
                quality    : 75,
                progressive: true
            }),
            pngquant({
                quality: '65-75',
                speed  : 1,
                floyd  : 0
            }),
            global.$.imagemin.gifsicle(),
            global.$.imagemin.svgo({
                plugins: [{
                    removeViewBox: true
                }]
            })
        ]))
        .pipe(global.gulp.dest(global.destPath + '/img'));
});

global.gulp.task('watchMode:image', function () {
    global.isWatching = true
});

global.gulp.task('watch:image', ['watchMode:image', 'image']);
