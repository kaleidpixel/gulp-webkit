'use strict';

const global = require('../global.js');

global.gulp.task('javascript', function () {
    const order = JSON.parse(global.fs.readFileSync(global.srcPath + '/js/_order.json'));

    return global.gulp.src(order)
        .pipe(global.$.plumber())
        .pipe(global.$.order(JSON.parse(global.fs.readFileSync(global.srcPath + '/js/_order.json')), {
            base: global.publicPath
        }))
        .pipe(global.$.if('!*.min.js',global.$.babel({
            presets: ['es2015'],
            compact: false
        })))
        .pipe(global.$.crLfReplace({changeCode: 'LF'}))
        .pipe(global.$.sourcemaps.init())
        .pipe(global.$.if('!*.min.js', global.$.uglify({
            output: {
                comments: global.uglifysSaveLicense
            }
        })))
        .pipe(global.$.concat('apps.js'))
        .pipe(global.$.sourcemaps.write('./', {
            mapFile: function(mapFilePath) {
                return mapFilePath.replace('.js.map', '.map');
            }
        }))
        .pipe(global.gulp.dest(global.destPath + '/js'));
});

global.gulp.task('watchMode:javascript', function () {
    global.isWatching = true
});

global.gulp.task('watch:javascript', ['watchMode:javascript', 'javascript']);
