module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['**/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
            spawn: false,
          },
      },
    },
    sass: {
      dist: {
        options: {
          style: 'compact'
        },
        files: {
          'css/overrides/main.css': 'scss/overrides/main.scss',
          'css/agency.css': 'scss/agency.scss'
        },
      },
    },
    cssmin: {
      target: {
          files: [{
            'css/overrides/main.min.css': 'css/overrides/main.css',
            'css/agency.min.css': 'css/agency.css'
          }]
        },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('minify', ['cssmin']);
  grunt.registerTask('dev', ['sass', 'minify']);
};