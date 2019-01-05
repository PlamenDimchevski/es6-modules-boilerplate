// Create namespace
window.SK = window.SK || {};

SK.domreadypromise = SK.domreadypromise || new Promise( ( resolve, reject ) => {
   window && window.addEventListener( 'DOMContentLoaded', resolve );
});
