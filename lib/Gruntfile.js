module.exports = function(grunt) {
  grunt.initConfig({
    browserify:{
      "../dist/app.js": ["../javascripts/main.js"]
    },
    jshint: {
      files: ['../javascripts/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6 
        globalstrict: true,
        globals: {"StarWars": true},
        browserify: true
      },
      files:["../javascripts/**/*.js"]
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/main.css': '../sass/style.scss'
        }
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../javascripts/**/*.js'], 
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      browserify:{
        files: ["../javascripts/**/*.js"],
        tasks: ["browserify"]
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass',"browserify", 'watch']);
};