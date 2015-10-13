'use strict';
module.exports = function(grunt) {
  // Load all tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);

  var jsFileList = [
    'assets/vendor/bootstrap/js/transition.js',
    'assets/vendor/bootstrap/js/alert.js',
    'assets/vendor/bootstrap/js/button.js',
    'assets/vendor/bootstrap/js/carousel.js',
    'assets/vendor/bootstrap/js/collapse.js',
    'assets/vendor/bootstrap/js/dropdown.js',
    'assets/vendor/bootstrap/js/modal.js',
    'assets/vendor/bootstrap/js/tooltip.js',
    'assets/vendor/bootstrap/js/popover.js',
    'assets/vendor/bootstrap/js/scrollspy.js',
    'assets/vendor/bootstrap/js/tab.js',
    'assets/vendor/bootstrap/js/affix.js',
    'assets/vendor/parallax/deploy/jquery.parallax.min.js',
    'assets/js/plugins/*.js',
    'assets/js/_*.js'
  ];

  var htmlFileList = [
    'index.html'
  ];


  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        '!assets/js/scripts.js',
        '!assets/**/*.min.*'
      ]
    },
    less: {
      dev: {
        files: {
          'assets/css/main.css': [
            'assets/less/main.less'
          ]
        },
        options: {
          compress: false,
          ieCompat: true,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: true,
          sourceMapFilename: 'assets/css/main.css.map',
          sourceMapRootpath: 'assets/css/'
        }
      },
      build: {
        files: {
          'dist/assets/css/main.min.css': [
            'assets/less/main.less'
          ]
        },
        options: {
          compress: true,
          ieCompat: true
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [jsFileList],
        dest: 'assets/js/scripts.js',
      },
    },
    uglify: {
      dist: {
        files: {
          'dist/assets/js/scripts.min.js': [jsFileList]
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', '> 1%', 'ff > 20', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      dev: {
        options: {
          map: {
            prev: 'assets/css/'
          }
        },
        src: 'assets/css/main.css'
      },
      build: {
        src: 'dist/assets/css/main.min.css'
      }
    },
    modernizr: {
      build: {
        devFile: 'assets/vendor/modernizr/modernizr.js',
        outputFile: 'dist/assets/js/vendor/modernizr.min.js',
        files: {
          'src': [
            ['dist/assets/js/scripts.min.js'],
            ['dist/assets/css/main.min.css']
          ]
        },
        uglify: true,
        parseFiles: true
      }
    },
    processhtml: {
      build: {
        files: {
          'dist/index.html': ['index.html']
        }
      }
    },
    uncss: {
      options: {
        compress: true,
        report: 'min',
        ignoreSheets : [/googleapis/,/font-awesome/],
        ignore: ['.has-error .form-control', '.affix', 'header.affix']
      },
      build: {
        files: {
          'dist/assets/css/main.min.css': ['dist/index.html']
        }
      }
    },
    copy:{
      build: {
        files: [
          {expand: true, cwd: 'assets/img/', src: ['**'], dest: 'dist/assets/img/', flatten: true, filter: 'isFile'},
          {expand: true, cwd: '', src: 'favicon.ico', dest: 'dist/', flatten: true, filter: 'isFile'},
        ]
      }
    },
    cssmin: {
      minify: {
        files: {
          'dist/assets/css/main.min.css': ['dist/assets/css/main.min.css']
        }
      }
    },
    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '/*** \n\n' +
                  // '$$\\       $$\\                               $$\\\n' +           
                  // '$$ |      \\__|                              \\__|\n' + 
                  // '$$$$$$$\\  $$\\ $$$$$$$\\   $$$$$$\\   $$$$$$\\  $$\\  $$$$$$\\\n' + 
                  // '$$  __$$\\ $$ |$$  __$$\\  \\____$$\\ $$  __$$\\ $$ | \\____$$\\\n' + 
                  // '$$ |  $$ |$$ |$$ |  $$ | $$$$$$$ |$$ |  \\__|$$ | $$$$$$$ |\n' + 
                  // '$$ |  $$ |$$ |$$ |  $$ |$$  __$$ |$$ |      $$ |$$  __$$ |\n' + 
                  // '$$$$$$$  |$$ |$$ |  $$ |\\$$$$$$$ |$$ |      $$ |\\$$$$$$$ |\n' + 
                  // '\\_______/ \\__|\\__|  \\__| \\_______|\\__|      \\__| \\_______|\n' + 
                  // ' Binaria Digital Agency - Barcelona | http://binaria.com/ \n\n' + 
                  '-- File generated on <%= grunt.template.today("dd-mm-yyyy HH:MM:ss") %> -- \n\n ***/'
        },
        files: {
          src: [ 'dist/assets/css/main.min.css', 'dist/assets/js/scripts.min.js' ]
        }
      }
    },
    watch: {
      less: {
        files: [
          'assets/less/*.less',
          'assets/less/**/*.less'
        ],
        tasks: ['less:dev', 'autoprefixer:dev']
      },
      js: {
        files: [
          jsFileList,
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'concat']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'assets/css/main.css',
          'assets/js/scripts.js',
          '*.html',
          'assets/less/**/*.less'
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          open: true,
          livereload: true,
          hostname: '*'
        }
      }
    },
  });

  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    grunt.task.run([
      'connect',
      'watch'
    ]);
  });

  // Register tasks
  grunt.registerTask('default', [
    'dev'
  ]);
  grunt.registerTask('dev', [
    'jshint',
    'less:dev',
    'autoprefixer:dev',
    'concat'
  ]);
  grunt.registerTask('build', [
    'jshint',
    'less:build',
    'autoprefixer:build',
    'uglify',
    'modernizr',
    'processhtml',
    'uncss',
    'copy:build',
    'cssmin',
    'usebanner'
  ]);
};
