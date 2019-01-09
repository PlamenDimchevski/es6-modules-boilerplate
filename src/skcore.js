// Create namespace
window.SK = window.SK || {};
SK.Core = SK.Core || {};

SK.domreadypromise = SK.domreadypromise || new Promise( ( resolve, reject ) => {
   window && window.addEventListener( 'DOMContentLoaded', resolve );
});

SK.Core.add = ( a, b ) => {
   return a + b;
};
