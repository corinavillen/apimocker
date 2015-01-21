// # Globbing (tip thanks to Yeoman)
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

/*global module:false*/
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        mochacli: {
            options: {
              globals: ['should'],
              timeout: 3000,
              ignoreLeaks: false,
              ui: 'bdd',
              reporter: 'spec'
            },

            all: { src: 'test/{,*/}*.js' }
        },

        watch: {
            files: [
                'Gruntfile.js',
                'lib/apimocker.js',
                'test/{,*/}*.js'
            ],
            tasks: ['jshint', 'test']
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'lib/apimocker.js',
                'test/{,*/}*.js'
            ]
        },

        bgShell: {
          runApiMocker: {
            cmd: 'node bin/apimocker'
          }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bg-shell');

    grunt.registerTask('test', [
        'mochacli'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test'
    ]);

    grunt.registerTask('run', [
        'bgShell:runApiMocker'
    ]);
};
