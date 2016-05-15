module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'components/*.js',
                dest: 'compiled.min.js'
            },
            build2: {
                src: 'components/fun1.js',
                dest: 'compiled2.min.js'
            }
        },
        cssmin: {
            build: {
                src: 'css/*.css',
                dest: 'css/allinone.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['uglify, something']);
};