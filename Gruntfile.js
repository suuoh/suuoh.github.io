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
      css: ['css/melvin.css', 'css/melvin.min.css'],
      js: ['js/melvin.js', 'js/melvin.min.js']
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
        'import': false,
        'regex-selectors': false,
        'unique-headings': false,
        'zero-units': false
      },
      css: {
        src: 'css/melvin*.css'
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
        browser: true,
        camelcase: true,
        curly: false,
        devel: true,
        eqeqeq: true,
        eqnull: true,
        validthis: true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      js: {
        src: 'js/melvin*.js'
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
        serve: true,
        exclude: [".gitignore", "CNAME", "Gruntfile.js", "LICENSE", "LICENSES.md", "node_modules", "package.json", "README.md", "start.sh"]
      }
    },

    watch: {
      less: {
        files: 'css/melvin*.less',
        tasks: 'less'
      },
      css: {
        files: 'css/melvin*.css',
        tasks: 'csslint'
      },
      coffee: {
        files: 'js/melvin*.coffee',
        tasks: 'coffee'
      },
      js: {
        files: 'js/melvin*.js',
        tasks: 'jshint:js'
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

  // Test task
  grunt.registerTask('test', ['clean', 'less', 'csslint', 'coffee', 'jshint', 'jekyll', 'validation']);

  // Distribution task
  grunt.registerTask('dist', ['clean', 'less', 'coffee', 'concat', 'cssmin', 'uglify']);

  // Default task
  grunt.registerTask('default', ['test', 'dist']);
};

