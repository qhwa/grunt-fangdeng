/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

// Basic template description.
exports.description = '创建Alibaba CBU前端开发团队开发环境';

// Template-specific notes to be displayed before question prompts.
exports.notes = '即将初始化模板。';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  grunt.helper('prompt', [
    // Prompt for these values.
    grunt.helper('prompt_for', 'name'),
    grunt.helper('prompt_for', 'description', '有史以来最好玩的小需求。'),
    grunt.helper('prompt_for', 'repository'),
    grunt.helper('prompt_for', 'author_name'),
    grunt.helper('prompt_for', 'author_email')
  ], function(err, props) {

    var files = init.filesToCopy(props);
    init.copyAndProcess( files, props, { noPrecess: 'libs/**', encoding: 'utf-8' } );

    // All done!
    done();
  });

};
