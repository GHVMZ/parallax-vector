module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options:{
                    sourceMap: true,
                },
                files: {
                    'style.css' : 'style.scss'
                }
            }
        },

        watch: {
            css: {
                files: ['*.scss'],
                files: ['*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('visit',['watch']);

}