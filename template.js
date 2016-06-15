/*
 * grunt-init-framework-fed
 */

'use strict';

// Basic template description.
exports.description = 'Cria projeto utilizando o Framework FED, baseado no grunt-init-gruntfile.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [], function(err, props) {

    // Find the first `preferred` item existing in `arr`.
    function prefer(arr, preferred) {
      for (var i = 0; i < preferred.length; i++) {
        if (arr.indexOf(preferred[i]) !== -1) {
          return preferred[i];
        }
      }
      return preferred[0];
    }

    // Guess at some directories, if they exist.
    var dirs = grunt.file.expand({filter: 'isDirectory'}, '*').map(function(d) { return d.slice(0, -1); });
    props.lib_dir = prefer(dirs, ['lib', 'src']);
    props.test_dir = prefer(dirs, ['test', 'tests', 'unit', 'spec']);

    // Maybe this should be extended to support more libraries. Patches welcome!
    props.jquery = grunt.file.expand({filter: 'isFile'}, '**/jquery*.js').length > 0;

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);


    // If is package_json true, generate package.json
    var devDependencies = {
      "grunt": "~1.0.0",
      "jit-grunt": "~0.10.0",
      "grunt-bower-concat": "~1.0.0",
      "grunt-browser-sync": "~2.2.0",
      "grunt-contrib-imagemin": "~1.0.1",
      "grunt-contrib-jshint": "~1.0.0",
      "grunt-contrib-sass": "~1.0.0",
      "grunt-contrib-uglify": "~1.0.1",
      "grunt-contrib-watch": "~1.0.0",
      "grunt-postcss": "~0.8.0",
      "autoprefixer": "~6.0.3",
      "grunt-svgstore": "~1.0.0"
    };

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      node_version: '>= 0.10.0',
      devDependencies: devDependencies
    });

    // All done!
    done();
  });

};
