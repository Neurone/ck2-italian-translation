module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            folder: ['build/']
        },
        compress: {
            main: {
                options: {
                    archive: 'build/<%= pkg.name %>.zip'
                },
                files: [
                    { expand: 'true', cwd: 'src/mod', src: ['**'], dest: './' }
                ]
            }
        },
        copy: {
            main: {
                expand: false,
                src: 'src/ck2-italian-translation.mod',
                dest: 'build/ck2-italian-translation.mod'
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean', 'compress', 'copy']);

};