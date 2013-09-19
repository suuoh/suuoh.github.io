module.exports = function(grunt) {
  "use strict";

  // Project configuration
  grunt.initConfig({

    // Import metadata
    pkg: grunt.file.readJSON('package.json'),

    // Banner
    banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %>\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the <%= pkg.licenses.type %> license\n' +
            ' */\n\n',

    // Task configuration
    clean: {
      jekyll: ['_site'],
      css: ['css/melvin*.css'],
      js: ['js/melvin*.js']
    },

    concat: {
      options: {
        stripBanners: true,
        banner: '<%= banner %>'
      },
      js: {
        src: 'js/melvin*.js',
        dest: 'js/melvin.js'
      },
      css: {
        src: 'css/melvin*.css',
        dest: 'css/melvin.css'
      }
    },

    less: {
      options: {},
      css: {
        expand: true,
        cwd: 'css/',
        src: 'melvin*.less',
        dest: 'css/',
        ext: '.css'
      }
    },

    csslint: {
      options: {
        'adjoining-classes': false,
        'import': false,
        'regex-selectors': false,
        'unique-headings': false,
        'zero-units': false
      },
      css: {
        src: ['css/melvin*.css', '!css/*.min.css']
      }
    },

    cssmin: {
      options: {},
      css: {
        src: 'css/melvin.css',
        dest: 'css/melvin.min.css'
      }
    },

    coffee: {
      options: {},
      js: {
        expand: true,
        cwd: 'js/',
        src: 'melvin*.coffee',
        dest: 'js/',
        ext: '.js'
      }
    },

    jshint: {
      options: {
        boss: true,
        browser: true,
        camelcase: true,
        curly: false,
        devel: true,
        eqeqeq: true,
        eqnull: true,
        validthis: true
      },
      gruntfile: {
        options: {
          camelcase: false
        },
        src: 'Gruntfile.js'
      },
      js: {
        src: ['js/melvin*.js', '!js/*min.js']
      }
    },

    uglify: {
      options: {},
      js: {
        src: 'js/melvin.js',
        dest: 'js/melvin.min.js'
      }
    },

    validation: {
      options: {
        reset: true,
      },
      melvin: {
        src: '_site/**/*.html'
      }
    },

    jekyll: {
      options: {        
        permalink: '/:categories/:year/:month/:title/',
        relative_permalinks: 'false',
        markdown: 'redcarpet',
        exclude: ['.gitignore', 'CNAME', 'Gruntfile.js', 'LICENSE', 'LICENSES.md', 'node_modules', 'package.json', 'README.md', 'start.sh', 'validation-report.json', 'validation-status.json']
      },
      preview: {
        options: {
          baseurl: '\'\'',
          serve: true,
          watch: true
        }
      },
      dist: {}
    },

    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: 'jshint:gruntfile'
      },
      css: {
        files: 'css/melvin*.less',
        tasks: ['clean:css', 'less', 'csslint', 'cssmin'],
        options: {
          spawn: false
        }
      },
      js: {
        files: 'js/melvin*.coffee',
        tasks: ['clean:js', 'coffee', 'jshint:js', 'uglify'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-jekyll');

  // Build task
  grunt.registerTask('build', ['clean', 'less', 'coffee', 'jekyll:dist']);

  // Test task
  grunt.registerTask('test', ['build', 'csslint', 'jshint', 'validation']);

  // Distribution task
  grunt.registerTask('dist', ['build', 'concat', 'cssmin', 'uglify']);

  // Preview task
  grunt.registerTask('preview', ['dist', 'jekyll:preview']);

  // Default task
  grunt.registerTask('default', ['test', 'dist']);
};

