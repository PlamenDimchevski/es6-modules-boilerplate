const path = require( 'path' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const BUNDLE_EXT = '.bundle.js';

const libraries_config = [
   {
      entry  :  './src/sklibrary.mjs',
      output : {
         filename       : `sklibrary${BUNDLE_EXT}`,
         path           : path.resolve( __dirname, 'build' ),
         library        : 'sklibrary',
         libraryTarget  : 'umd',
         umdNamedDefine : true,
      },
      externals : {
         'react'      : 'React',
         'react-dom'  : 'ReactDOM',
      },
   },
];

const bundles_config = {
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
   externals : {
      'react'      : 'React',
      'react-dom'  : 'ReactDOM',
      'skcore'     : 'SK.Core',
      'utils'      : 'SK.Util',
      'singletons' : 'SK.Singletons',
      'sklibrary'  : 'sklibrary',
   },
   plugins : [
      new CleanWebpackPlugin( [ 'build/*.bundle.js*' ], {
         root : __dirname,
      }),
   ],
};

const default_config = {
   mode   : process.env.NODE_ENV || 'development',
   devtool : process.env.NODE_ENV != 'production' ? 'source-map' : '',
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
};

module.exports = [
   ...libraries_config.map( config => Object.assign( {}, default_config, config ) ),
   Object.assign( {}, default_config, bundles_config )
];
