/*
 * grunt-ts-reference
 * https://github.com/honmaaax/grunt-ts-reference
 *
 * Copyright (c) 2015 Hitoshi Honma
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){
    grunt.initConfig({
        "ts-reference": {
            a: {
                src: [
                    "./test/src/*.ts",
                    "./test/src/a/*.ts",
                ],
                dest: "./test/dest/test1.ts"
            },
            b: {
                src: [
                    "./test/src/**/*.ts",
                ],
                dest: "./test/dest/test2.ts"
            },
        }
    });

    grunt.loadTasks('tasks');
};
