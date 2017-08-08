'use strict';

const global = require('../global.js');

global.gulp.task('browserSync', function () {
    const init = {
        notify : false,
        open   : global.bsOpen,
        browser: global.bsBrowser,
        files  : [
            global.publicPath + '/**/*.{html,php}',
            global.destPath + '/css/**/*.css',
            global.destPath + '/js/**/*.js',
            global.destPath + '/img/**/*.{jpg,jpeg,png,gif,svg}'
        ]
    };

    if (false !== global.bsProxyURI) {
        init.proxy = global.bsProxyURI;
    } else {
        init.server = {
            baseDir: global.publicPath
        };
    }

    if (global.bsHttpSSL) {
        init.https = global.bsHttpSSL;
    }

    if (false !== global.bsHttpModule) {
        init.httpModule = global.bsHttpModule
    }

    return global.browserSync(init);
});
