# es6-modules-boilerplate
Boilerplate for using ES6 modules into a client-side executable code either w/ or w/o bundling

# Prerequisites
 - [x] Use Grunt as a task runner
 - [x] Use Webpack to bundle the modules (multiple bundles must be supported)
 - [x] Use Babel to transpile JSX and specific ES6 features
 - [x] Use `.mjs` as an extension of the module files
 - [x] `React` and `ReactDOM` must be loaded as static scripts on the page instead of including them into the modules
 - [x] All React components must be rendered when the `DOMContentLoaded` event was being fired
 - [x] Watch `.mjs` files for changes and transpile them realtime
 - [x] Enable sourcemaps (if possible)
 - [ ] Give an opportunity to use `npm` modules on the client-side
 - [ ] Bundles should be able to be executed on the server-side (Node.js)
 - [ ] Think about including linter, CSS styles loader

# How to use
 - Run `npm run build` to create the initial modules bundle
 - Run `npm start` to start the development environment
