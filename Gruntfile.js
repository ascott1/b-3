// based on Super Big Tree
// http://superbigtree.tumblr.com/post/59519017137/introduction-to-grunt-js-and-npm-scripts-and-choosing
// and Backbone Boilerplate
// https://github.com/backbone-boilerplate/backbone-boilerplate/blob/master/Gruntfile.js
module.exports = function(grunt) {
  grunt.initConfig({

    clean: ['dist'],

    copy: {
      all: {
        src: ['*.css', '*.html', 'images/**/*', 'img/**/*', '!Gruntfile.js'],
        dest: 'dist/',
      },
    },

    browserify: {
      all: {
        src: 'assets/js/*.js',
        dest: 'dist/assets/js/app.js'
      },
      options: {
        transform: ['debowerify']
      }
    },

    connect: {
      options: {
        port: process.env.PORT || 3131,
        base: 'dist/',
      },

      all: {},
    },

    watch: {
      options: {
        livereload: true
      },

      js: {
        files: '<%= browserify.all.src %>',
        tasks: ['browserify'],
      },

      assets: {
        files: ['assets/**/*', '*.css', '*.js', 'images/**/*', 'img/**/*', '!Gruntfile.js'],
        tasks: ['copy'],
      }
    },

    'gh-pages': {
      options: {
        base: 'dist/'
      },
      src: ['**/*']
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['clean', 'browserify', 'copy']);

  grunt.registerTask('server', ['default', 'connect', 'watch']);

  grunt.registerTask('deploy', ['default', 'gh-pages']);

};