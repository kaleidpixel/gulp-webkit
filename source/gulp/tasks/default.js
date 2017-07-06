'use strict';

const global = require('../global.js');

global.gulp.task('default', ['clean'], function (cb) {
    return global.runSequence(['pug', 'scss', 'javascript', 'image'], 'browserSync', 'watch', cb);
});
