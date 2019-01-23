const path = require( 'path' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;
const BUNDLE_EXT = '.bundle.js';

const libraries_config = [
   {
      entry  :  {
         library1 : './src/sklibrary.mjs',
      },
      output : {
         filename       : `SK.[name]${BUNDLE_EXT}`,
         path           : path.resolve( __dirname, 'build' ),
         library        : [ 'SK', '[name]' ],
         libraryTarget  : 'window',    // make the library available to include only as a global window object with a <script> element
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
      'library1'   : 'SK.library1',
   },
   plugins : [
      new CleanWebpackPlugin( [ 'build/*.bundle.js*' ], {
         root : __dirname,
      }),
      new BundleAnalyzerPlugin(),
   ],
};

const default_config = {
   mode : 'production',
   module : {
      rules : [
         {
            test    : /\.mjs$/,
            include : path.resolve( __dirname, 'src' ),
            type    : 'javascript/auto',
            exclude : /node_modules/,
            use     : [ 'babel-loader' ],
         },
      ]
   },
};

// In case we are in development mode - put some
// additional options into the default config object.
if ( process.env.NODE_ENV != 'production' ) {
   Object.assign(
      default_config,
      {
         mode    : 'development',
         devtool : 'inline-source-map',
         watch   : true,
         // optimization : {
         //    minimize : false,  // Disable the UglifyJS in production mode
         //    concatenateModules : true,
         // },
         optimization : {
            splitChunks : {
               cacheGroups: {
                  vendor: {
                     test: /[\\/]node_modules[\\/]/,
                     name : module => {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match( /[\\/]node_modules[\\/](.*?)([\\/]|$)/ )[ 1 ];
                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace( '@', '' )}`;
                     },
                     chunks  : 'initial',  // all
                     enforce : true,
                  },
               }
            }
         },
      }
   );
}

module.exports = [
   ...libraries_config.map( config => Object.assign( {}, default_config, config ) ),
   Object.assign( {}, default_config, bundles_config )
];
