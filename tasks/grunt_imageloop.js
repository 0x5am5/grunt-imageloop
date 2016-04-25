/*
 * grunt-imageloop
 * https://github.com/samuelgregory/grunt-test-plugin
 *
 * Copyright (c) 2016 Samuel Gregory
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('image_loop', 'Generating JSON from image folder.', function() {

    // Default options
    var options = this.options({
      indentation: 4
    });

    this.files.forEach(function(f) {
      var images = [];
      f.src.map(function(filename) {
        var fileMatch = filename.match(/([^\/]*\.\w+$)/);
        // Loop through each of the files
        images.push(
          { 
            src: fileMatch[0],
            filename: fileMatch[0].split('.')[0],
            ext: fileMatch[0].split('.')[1]
           }
        );
      });
      if (images.length) {
        // Set indentation to 0 so that file is minified
        if (options.minify) options.indentation = null;
        // Write file
        grunt.file.write(f.dest, JSON.stringify(images, null, options.indentation));
        // Print a success message.
        grunt.log.writeln('File "' + f.dest + '" created from ' + images.length + ' file(s).');
      } else {
        // Print a error message.
        grunt.log.writeln('File "' + f.dest + '" was not created. No images found.');
      }
    });
  });
};