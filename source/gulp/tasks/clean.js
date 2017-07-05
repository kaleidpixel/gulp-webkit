'use strict';

const global = require('../global.js');

global.gulp.task('clean', function () {
    return global.$.cached.caches = {};
});
