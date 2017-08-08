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
const bsProxyURI = false;
const bsHttpSSL = false;
const bsHttpModule = false;
const bsOpen = 'local'; // or external or ui or ui-external
const bsBrowser = ["google chrome", "firefox"]; // String or Array
const srcDirName = 'source';
const destDirName = 'assets';
const srcPath = publicPath + '/' + srcDirName;
const destPath = publicPath + '/' + destDirName;
const bowerComponentsPath = publicPath + '/bower_components';
const nodeModulesPath = publicPath + '/node_modules';

module.exports = {
    rootPath           : rootPath,
    tasksPath          : tasksPath,
    publicPath         : publicPath,
    wpPath             : wpPath,
    bsProxyURI         : bsProxyURI,
    bsHttpSSL          : bsHttpSSL,
    bsHttpModule       : bsHttpModule,
    bsOpen             : bsOpen,
    bsBrowser          : bsBrowser,
    srcDirName         : srcDirName,
    destDirName        : destDirName,
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
