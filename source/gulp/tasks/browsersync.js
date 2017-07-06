'use strict';

const global = require('../global.js');

global.gulp.task('browserSync', function () {
    return global.browserSync({
        notify: false,
        open  : 'external',
        //proxy : global.proxyURI,
        //https : global.proxySSL,
        server: {
            baseDir: global.publicPath
        },
        files: [
            global.publicPath + '/**/*.html',
            global.destPath + '/css/**/*.css',
            global.destPath + '/js/**/*.js'
        ]
    });
});
