'use strict';

const global = require('../global.js');

global.gulp.task('browserSync', function () {
    return global.browserSync.init(null, {
        notify: false,
        open  : 'external',
        //proxy : global.proxyURI,
        //https : global.proxySSL
        server: {
            baseDir: global.publicPath
        }
    });
});
