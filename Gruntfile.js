const path = require( 'path' );

module.exports = ( grunt ) => {
   // Load NPM tasks
   [
      'grunt-babel',
      'grunt-contrib-watch-chokidar',
      'grunt-webpack',
   ].forEach( grunt.loadNpmTasks.bind( grunt ) );

   // Init congiguration
   grunt.initConfig({
      watchChokidar : {
         options: {
            spawn         : false,
            interval      : 100,
            debounceDelay : 1000,
         },
         files : [
            './src/**/*.mjs',
         ],
         tasks : [ 'webpack' ],
      },
      webpack : {
         myConfig : {
            mode   : process.env.NODE_ENV || 'development',
            entry  : {
               app     : './src/index.mjs',
               rte     : './src/elements/rte/index.mjs',
               gallery : './src/elements/gallery/index.mjs',
            },
            output : {
               filename : '[name].bundle.js',
               path     : path.resolve( __dirname, 'build' )
            },
            devtool : 'source-map',
            module : {
               rules : [
                  {
                     // TODO: test for either .jsx or .mjsx files as well? /\.(mjs|jsx)$/
                     test    : /\.mjs$/,
                     exclude : /node_modules/,
                     use     : [ 'babel-loader' ],
                  }
               ]
            }
         }
      },
   });

   // A very basic default task.
   grunt.registerTask( 'build', 'Bundle the ES6 modules.', [ 'webpack' ] );
   grunt.registerTask( 'watch', 'Watching for changes and bundle the ES6 modules realtime.', [ 'webpack', 'watchChokidar' ] );
}
