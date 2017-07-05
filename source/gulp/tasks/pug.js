'use strict';

const global = require('../global.js');

global.gulp.task('pug', function () {
    return global.gulp.src([global.srcPath + '/pug/**/*.pug', global.srcPath + '/pug/_variables.json'])
        .pipe(global.$.plumber())
        //.pipe(global.$.if(global.isWatching, global.$.changed(global.publicPath, {extension: '.html'})))
        //.pipe(global.$.if(global.isWatching, global.$.cached('pug')))
        .pipe(global.$.pugInheritance({
            basedir: global.srcPath + '/pug',
            skip   : 'node_modules'
        }))
        .pipe(global.$.filter(function (file) {
            return !/\/_/.test(file.path) && !/^_/.test(file.relative);
        }))
        .pipe(global.$.data(function () {
            return JSON.parse(global.fs.readFileSync(global.srcPath + '/pug/_variables.json'))
        }))
        .pipe(global.$.pug({
            pretty: true
        }))
        .pipe(global.gulp.dest(global.publicPath))
        .pipe(global.$.if(global.isWatching, global.browserSync.reload({
            stream: true
        })));
});

global.gulp.task('watchMode:pug', function () {
    global.isWatching = true
});

global.gulp.task('watch:pug', ['watchMode:pug', 'pug']);
