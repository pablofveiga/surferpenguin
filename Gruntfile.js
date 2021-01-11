//Gruntfile.js
module.exports = function (grunt) {
    grunt.initConfig({
        
      // Watch task config con Sass
      watch: {
          options: {
              nospawn: true,
              livereload: true
          },
  
          sass: {
              files: ['src/assets/css/**/*.scss'],
              tasks: ['sass']
          },
          copy: {
              files: ['src/**'],
              tasks: ['copy:main']
          }            
      },
  
      // COPY task congif
      copy: {
          main: {
              expand: true,
              cwd: 'src/',
              src: ["**/*", "!css/**/*.scss"],
              dest: 'dist/'
          }
      },
  
       
       // Sass task config
      sass: {
          dist: {
              options: {
                  style: 'compressed',
                  noCache: true
              },
              files: [{
                  expand: true,
                  cwd:    "src/assets/css",
                  src:    ["*.scss"],
                  dest:  "src/assets/css",
                  ext:    ".css"
              }]
          }
      }
  
  
   
      });
   
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
   
   //Tarea por defecto
   grunt.registerTask('default', ['copy', 'watch']);
  };