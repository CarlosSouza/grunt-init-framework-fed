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
      "grunt": "~0.4.5",
      "grunt-bower-concat": "~0.4.0",
      "grunt-browser-sync": "~1.5.2",
      "grunt-contrib-imagemin": "~0.8.1",
      "grunt-contrib-jshint": "~0.10.0",
      "grunt-contrib-sass": "~0.9.2",
      "grunt-contrib-uglify": "~0.6.0",
      "grunt-contrib-watch": "~0.6.1",
      "grunt-postcss": "~0.6.0",
      "autoprefixer": "~6.0.3",
      "pixrem": "~3.0.0",
      "grunt-svgstore": "~0.5.0"
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
