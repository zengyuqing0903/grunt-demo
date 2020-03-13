module.exports = function (grunt) {
  grunt.initConfig({
    sprite: {
      files:{
        src:['images/*.png'],
        dest:'dist/bundle.png',
	      destCss:'dist/sprite.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-spritesmith');

  grunt.registerTask('default', ['sprite']);
};
