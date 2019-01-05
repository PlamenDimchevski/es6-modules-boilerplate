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
            mode   : 'development',   // production | development
            entry  : './src/index.mjs',
            output : {
               filename : 'app.js',
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
