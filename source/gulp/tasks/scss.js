'use strict';

const global = require('../global.js');

global.gulp.task('scss', function () {
    return global.gulp.src(global.srcPath + '/scss/**/*.scss')
        .pipe(global.$.plumber())
        .pipe(global.$.if(global.isWatching, global.$.changed(global.destPath + '/css', {
            extension: '.css'
        })))
        .pipe(global.$.if(global.isWatching, global.$.cached('sass')))
        .pipe(global.$.sassInheritance({
            dir: global.srcPath + '/scss'
        }))
        .pipe(global.$.filter(function (file) {
            return !/\/_/.test(file.path) && !/^_/.test(file.relative);
        }))
        .pipe(global.$.sourcemaps.init())
        .pipe(global.$.sass().on('error', global.$.sass.logError))
        .pipe(global.$.if('*.css', global.$.pleeease({
            autoprefixer: {
                browsers: ['last 2 versions', '> 1%']
            },
            rem         : {
                rootValue: '10px'
            },
            minifier    : {
                preserveHacks    : true,
                removeAllComments: true
            },
            mqpacker    : true
        })))
        .pipe(global.$.sourcemaps.write('./'))
        .pipe(global.gulp.dest(global.destPath + '/css'));
});

global.gulp.task('watchMode:scss', function () {
    global.isWatching = true
});

global.gulp.task('watch:scss', ['watchMode:scss', 'scss']);
