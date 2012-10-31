/*
 * grunt-fangdeng
 * https://github.com/qhwa/grunt-fangdeng
 *
 * Copyright (c) 2012 qhwa
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('fangdeng', 'Templates and scaffolds for web developers of Alibaba.', function() {
    grunt.log.write(grunt.helper('fangdeng'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('fangdeng', function() {
    return 'fangdeng!!!';
  });

};
