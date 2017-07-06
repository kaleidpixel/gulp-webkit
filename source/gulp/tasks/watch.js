'use strict';

const global = require('../global.js');

global.gulp.task('watch', function () {
    global.$.watch([global.srcPath + '/pug/**/*.pug', global.srcPath + '/pug/_variables.json'], function () {
        return global.gulp.start(['watch:pug']);
    });
    global.$.watch([global.srcPath + '/scss/**/*.scss'], function () {
        return global.gulp.start(['watch:scss']);
    });
    global.$.watch([global.srcPath + '/js/**/*.js', global.srcPath + '/js/_order.json'], function () {
        return global.gulp.start(['watch:javascript']);
    });
    global.$.watch([global.srcPath + '/img/**/*.{jpg,jpeg,png,gif,svg}'], function () {
        return global.gulp.start(['watch:image']);
    });
});
