'use strict';

const global = require('../global.js');

global.gulp.task('build', ['clean'], function (cb) {
    return global.runSequence(['pug', 'scss', 'javascript', 'image'], 'clean', cb);
});
