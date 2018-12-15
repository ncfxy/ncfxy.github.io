
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
                dest: 'css/'
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-less');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['less']);

};