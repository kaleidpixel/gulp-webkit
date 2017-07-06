'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
const uglifysSaveLicense = require('uglify-save-license');
const fs = require('fs');
const path = require('path');
const rootPath = __dirname;
const tasksPath = rootPath + '/tasks';
const publicPath = path.resolve(rootPath + '/../../');
const publicDirName = publicPath.replace(/((.*?)\/)*/, '');
const wpPath = rootPath.replace('/wp-content/themes/' + publicDirName + '/source/gulp', '');
const proxyURI = 'http://127.0.0.1:8080';
const proxySSL = false;
const srcPath = publicPath + '/source';
const destPath = publicPath + '/assets';
const bowerComponentsPath = publicPath + '/bower_components';
const nodeModulesPath = publicPath + '/node_modules';

module.exports = {
    rootPath           : rootPath,
    tasksPath          : tasksPath,
    publicPath         : publicPath,
    wpPath             : wpPath,
    proxyURI           : proxyURI,
    proxySSL           : proxySSL,
    srcPath            : srcPath,
    destPath           : destPath,
    bowerComponentsPath: bowerComponentsPath,
    nodeModulesPath    : nodeModulesPath,
    gulp               : gulp,
    $                  : $,
    browserSync        : browserSync,
    requireDir         : requireDir,
    runSequence        : runSequence,
    fs                 : fs,
    uglifysSaveLicense : uglifysSaveLicense,
    isWatching         : false
};
