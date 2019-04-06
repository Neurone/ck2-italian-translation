module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            init: ['build/**'],
            complete: ['build/dist/*', '!build/dist/<%= pkg.name %>-<%= pkg.version %>.zip']
        },
        copy: {
            release:
            {
                expand: true,
                cwd: 'src/mod',
                src: '**',
                dest: 'build/'
            },
            complete:
            {
                src: 'src/resources/ck2-italian-translation-release.mod',
                dest: 'build/dist/ck2-italian-translation.mod'
            },
            dev:
            {
                files: [
                    {
                        expand: true,
                        cwd: 'src/mod',
                        src: '**',
                        dest: 'build/dist/ck2-italian-translation'
                    },
                    {
                        src: 'src/resources/ck2-italian-translation-dev.mod',
                        dest: 'build/dist/ck2-italian-translation.mod'
                    },
                    {
                        src: 'src/resources/logo.png',
                        dest: 'build/dist/ck2-italian-translation/logo.png'
                    }
                ]
            },
        },
        compress: {
            build: {
                options: {
                    archive: 'build/dist/<%= pkg.name %>.zip'
                },
                files: [
                    { expand: 'true', cwd: 'build', src: ['**'], dest: './' }
                ]
            },
            release: {
                options: {
                    archive: 'build/dist/<%= pkg.name %>-<%= pkg.version %>.zip'
                },
                files: [
                    { expand: 'true', cwd: 'build/dist', src: ['**'], dest: './' }
                ]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean:init', 'copy:release', 'compress:build', 'copy:complete', 'compress:release', 'clean:complete']);
    grunt.registerTask('dev', ['clean:init', 'copy:dev']);
};