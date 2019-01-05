const path = require( 'path' );

module.exports = ( grunt ) => {
   // Load NPM tasks
   [
      'grunt-babel',
      'grunt-webpack',
   ].forEach( grunt.loadNpmTasks.bind( grunt ) );

   // Init congiguration
   grunt.initConfig({
      webpack : {
         myConfig : {
            mode   : 'production',   // production | development
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
   grunt.registerTask( 'default', 'Bundle the ES6 modules.', [ 'webpack' ] );
}
