const path = require( 'path' );
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
         myConfig : [
            {
               mode   : process.env.NODE_ENV || 'development',
               entry  :  './src/sklibrary.mjs',
               output : {
                  filename : `sklibrary${BUNDLE_EXT}`,
                  path     : path.resolve( __dirname, 'build' ),
                  library  : 'sklibrary',
               },
               // devtool : 'source-map',
               watch : process.env.NODE_ENV != 'production',
               module : {
                  rules : [
                     {
                        test    : /\.mjs$/,
                        type    : 'javascript/auto',
                        exclude : /node_modules/,
                        use     : [ 'babel-loader' ],
                     }
                  ]
               },
               externals : {
                  'react'     : 'React',
                  'react-dom' : 'ReactDOM',
               },
            },
            {
               mode   : process.env.NODE_ENV || 'development',
               entry  : {
                  main      : './src/index.mjs',
                  rte       : './src/elements/rte/index.mjs',
                  gallery   : './src/elements/gallery/index.mjs',
                  form      : './src/elements/form/index.mjs',
               },
               output : {
                  filename : `[name]${BUNDLE_EXT}`,
                  path     : path.resolve( __dirname, 'build' ),
               },
               // devtool : 'source-map',
               watch : process.env.NODE_ENV != 'production',
               module : {
                  rules : [
                     {
                        test    : /\.mjs$/,
                        type    : 'javascript/auto',
                        exclude : /node_modules/,
                        use     : [ 'babel-loader' ],
                     }
                  ]
               },
               externals : {
                  'react'      : 'React',
                  'react-dom'  : 'ReactDOM',
                  'skcore'     : 'SK.Core',
                  'utils'      : 'SK.Util',
                  'singletons' : 'SK.Singletons',
                  'sklibrary'  : 'sklibrary',
               },
            }
         ]
      },
   });

   // A very basic default task.
   grunt.registerTask( 'build', 'Bundle the ES6 modules.', [ 'webpack' ] );
   grunt.registerTask( 'watch', 'Watching for changes and bundle the ES6 modules realtime.', [ 'concurrent' ] );
}
