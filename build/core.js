window.domreadypromise = window.domreadypromise || new Promise( ( resolve, reject ) => {
   window.addEventListener( 'DOMContentLoaded', resolve );
});
