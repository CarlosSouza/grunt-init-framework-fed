/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      version: '0.1.0'
    },
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    uglify: {
      dist: {
        files: [
          {src: 'js/main.js', dest: 'js/main.min.js'},
          {src: 'js/plugins.js', dest: 'js/plugins.min.js'}
        ],
        options: {
          sourceMap: true,
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
      },
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'imagens/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'imagens/'
        }]
      }
    },
    bowerInstall: {
      target: {
        src: [
          '*.html'
        ],
        cwd: '',
        dependencies: true,
        devDependencies: false,
        exclude: [],
        fileTypes: {},
        ignorePath: '',
        overrides: {}
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            "css/*.css",
            "*.html"
          ]
        },
        options: {
          ghostMode: {
            clicks: true,
            location: true,
            forms: true,
            scroll: true
          },
          watchTask: true,
          proxy: "localhost:8888",
          browser: "google chrome"
        }
      }
    },
    watch: {
      files: ['*.html', '*.png', '*.jpg', '*.js'],
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      sass: {
        files: ['scss/*'],
        tasks: ['compass'],
      },
      scripts: {
        files: ['js/*'],
        tasks: ['uglify', 'jshint'],
        options: {
          spawn: false,
        },
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task.
  grunt.registerTask('default', ['compass','jshint','browserSync','watch','imagemin']);

};