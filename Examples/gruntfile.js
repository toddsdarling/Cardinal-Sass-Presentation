module.exports = function(grunt) {
;
  grunt.initConfig({

    // Project configuration
    pkg: grunt.file.readJSON('package.json'),

    // Compile Sass
    sass: {
      dist: {
        files: [{
          expand:true,
          cwd:'sass-examples',
          src: "**/*.scss",
          dest:'sass-examples',
          ext: ".css"          
        }]
      }
    },

    // Watch and build
    watch: {
      sass: {
        files: ['sass-examples/**/*.scss'],
        tasks: ['sass']
      }
    }

  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Run tasks
  grunt.registerTask('default', ['watch']);



};