'use strict';

const global = require('../global.js');

global.gulp.task('watch', function () {
    global.$.watch([global.srcPath + '/pug/**/*.pug', global.srcPath + '/pug/_variables.json'], function () {
        return global.gulp.start(['watch:pug']);
    });
});