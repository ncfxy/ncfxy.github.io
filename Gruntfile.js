
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        less: {
            options: {
                javascriptEnabled: true
            },
            compileLess: {
                expand: true,
                cwd: './less',
                src: '**/*.less',
                dest: 'css/',
                ext: '.css'
            }
        },
        watch: {
            develop: {
                options: {
                    livereload: true,
                },
                files: ['pages/**/*.html', 'js/**/*.js']
            },
            lessChange:{
                files: ['less/**/*.less'],
                tasks:['less']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['less']);

};