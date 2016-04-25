/*
 * grunt-imageloop
 * https://github.com/samuelgregory/grunt-imageloop
 *
 * Copyright (c) 2016 Samuel Gregory
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    image_loop: {
      default_options: {
        files: {
          'tmp/data.json': 'img/**/*.{jpg,gif,png}'
        }
      },
      minify_options: {
        options: {
          minify: true
        },
        files: {
          'tmp/data-min.json': 'img/**/*.{jpg,gif,png}'
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['image_loop']);

};
