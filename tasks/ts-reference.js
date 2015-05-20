/*
 * grunt-ts-reference
 * https://github.com/honmaaax/grunt-ts-reference
 *
 * Copyright (c) 2015 Hitoshi Honma
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt){
    var options = {};
    var task = function(files, dest){
        var _dir = path.dirname(dest);
        var _output = files.map(function(file){
            file = path.relative(_dir, file);
            return '/// <reference path="' + file + '"/>';
        }).join('\n');
        grunt.file.write(dest, _output);
    };
    grunt.registerMultiTask('ts-reference', 'Task For Building A Typescript Reference File', function(){
        this.files.forEach(function(file){
            task(file.src, file.dest);
        });
    });
};
