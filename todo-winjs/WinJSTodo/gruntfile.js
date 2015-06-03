/// <binding ProjectOpened='tsd' />
module.exports = function (grunt) {
    // Project configuration
    grunt.initConfig({
        tsd: {
            refresh: {
                options: {
                    command: 'reinstall',
                    latest: true,
                    config: './tsd.json'
                }
            }
        }
    })

    // Load the "tsd" task to automate TypeScript definition related tasks.
    grunt.loadNpmTasks('grunt-tsd');
};