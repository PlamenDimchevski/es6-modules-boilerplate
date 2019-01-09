const webpack_config = require( './webpack.config.js' );
const BUNDLE_EXT = '.bundle.js';

module.exports = ( grunt ) => {
   // Load NPM tasks
   [
      'grunt-babel',
      'grunt-concurrent',
      'grunt-contrib-watch-chokidar',
      'grunt-webpack',
   ].forEach( grunt.loadNpmTasks.bind( grunt ) );

   // Init congiguration
   grunt.initConfig({
      concurrent : {
         options : {
            logConcurrentOutput : true
         },
         tasks : [ 'webpack', 'watchChokidar' ]
      },
      watchChokidar : {
         options: {
            spawn         : false,
            interval      : 100,
            debounceDelay : 1000,
         },
         files : [
            `./build/**/*${BUNDLE_EXT}`,
         ],
         tasks : [
            // TODO: Run concat task
         ],
      },
      webpack : {
         myConfig : webpack_config
      },
   });

   // A very basic default task.
   grunt.registerTask( 'build', 'Bundle the ES6 modules.', [ 'webpack' ] );
   grunt.registerTask( 'watch', 'Watching for changes and bundle the ES6 modules realtime.', [ 'concurrent' ] );
}
