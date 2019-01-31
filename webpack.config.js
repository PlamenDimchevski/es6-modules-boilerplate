const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;
const BUNDLE_EXT = '.m.js';

// Put the configurations for the ES6 modules based libraries here.
// Most common a library contains the resusable components.
const libraries_config = [
   {
      entry  :  {
         core_library : './src/core_library.mjs',
      },
      output : {
         filename       : `[name]${BUNDLE_EXT}`,
         path           : path.resolve( __dirname, 'build' ),
         library        : [ 'SK', '[name]' ],
         libraryTarget  : 'var',    // make the library available to include only as a global object with a <script> element
         umdNamedDefine : true,
      },
      externals : {
         'react'      : 'React',
         'react-dom'  : 'ReactDOM',
      },
   },
];

// Entries configuration
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
      'react'        : 'React',
      'react-dom'    : 'ReactDOM',
      'skcore'       : 'SK.Core',
      'utils'        : 'SK.Util',
      'singletons'   : 'SK.Singletons',
      'core_library' : 'SK.core_library',
   },
   plugins : [
      new CleanWebpackPlugin(
         [
            `build/*${BUNDLE_EXT}`,
            'build/*.css'
         ],
         {
            root : __dirname,
         }
      ),
      new MiniCssExtractPlugin({
         filename      : 'fat_[name].css',
      }),
      // new BundleAnalyzerPlugin(),
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
         {
            test : /\.css$/,
            use  : [
              MiniCssExtractPlugin.loader,
              'css-loader',
            ]
         }
      ]
   },
   optimization : {
      // minimize : false,  // TODO: Make comparison! Disable the code minimizing in production mode (our UglifyJS will do that)
      concatenateModules : false,
      splitChunks : {
         cacheGroups: {
            vendor: {
               test : /[\\/]node_modules[\\/]/,
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
      }
   );
}

module.exports = [
   ...libraries_config.map( config => Object.assign( {}, default_config, config ) ),
   Object.assign( {}, default_config, bundles_config )
];
