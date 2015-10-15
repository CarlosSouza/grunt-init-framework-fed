/*global module:false*/
module.exports = function(grunt) {

  // Configuração do projeto
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      version: '1.0.0'
    },
    // Configuração das tasks
    uglify: {
      dist: {
        files: grunt.file.expandMapping(['js/*.js', '!js/*.min.js'], '', {
          rename: function(destBase, destPath) {
            return destBase+destPath.replace('.js', '.min.js');
          }
        }),
        options: {
          sourceMap: true,
          banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
      }
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
        node: true,
        ignores: ['js/_bower.js', 'js/_bower.min.js', 'js/plugins.js', 'js/plugins.min.js'],
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css',
        }],
        options: {
          style: 'compressed'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('pixrem')(), // add fallbacks for rem units
        ]
      },
      dist: {
        src: ['css/geral.css','css/impressao.css']
      },
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'imagens/',
          src: ['imagens/*.{png,jpg,gif}'],
          dest: 'imagens/'
        }]
      }
    },
    svgstore: {
      options: {
        prefix : 'icone-',
        cleanup: true,
        svg: {
          viewBox : '0 0 100 100',
          xmlns: 'http://www.w3.org/2000/svg'
        }
      },
      default: {
        files: {
          'imagens/icones.svg': ['imagens/svg/*.svg'],
        },
      },
    },
    bower_concat: {
      all: {
        dest: 'js/_bower.js',
        cssDest: 'css/_bower.css',
        exclude: [
          'jquery',
          'modernizr',
          'bootstrap',
          'angular',
          'angular-bootstrap',
          'angular-i18n',
          'd3'
        ],
        bowerOptions: {
          relative: false
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      imagemin: {
        files: ['imagens/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      },
      css: {
        files: 'scss/*.scss',
        tasks: ['sass', 'postcss']
      },
      svgstore: {
        files: 'imagens/svg/*.svg',
        tasks: ['svgstore']
      },
      bower_concat: {
        files: 'bower_components/**/*.js',
        tasks: ['bower_concat']
      },
      scripts: {
        files: ['js/*'],
        tasks: ['uglify', 'jshint']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ['css/*.css','*.html','imagens/*']
        },
        options: {
          ghostMode: {
            clicks: true,
            location: true,
            forms: true,
            scroll: true
          },
          watchTask: true,
          proxy: "localhost:8888"
        }
      }
    }
  });

  // Plugins necessários para executar as tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-svgstore');

  // Task padrão
  grunt.registerTask('default', ['browserSync','watch']);

};
