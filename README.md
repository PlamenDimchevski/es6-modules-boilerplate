# es6-modules-boilerplate
Boilerplate for using ES6 modules into a client-side executable code either w/ or w/o bundling

# Prerequisites
 - Use Grunt as a task runner
 - Use Webpack to bundle the modules (multiple bundles must be supported)
 - Use Babel to transpile JSX and specific ES6 features
 - Use `.mjs` as an extension of the module files
 - `React` and `ReactDOM` must be loaded as static scripts on the page instead of including them into the modules
 - All React components must be rendered when the `DOMContentLoaded` event was being fired
 - Watch `.mjs` files for changes and transpile them realtime
 - Enable sourcemaps (if possible)

# How to use
 - Run `npm run build` to create the initial modules bundle
