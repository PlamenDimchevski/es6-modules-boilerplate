import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './elements/gallery';
import Form from './elements/form';

import( /* webpackChunkName: "dynamicRTE" */ './elements/rte' ).then( ( { default : RTE } ) => {
   SK.domreadypromise.then( () => {
      ReactDOM.render(
         React.createElement(
            RTE,
            {
               content : 'Hello from the RTE component!',
            }
         ),
         document.getElementById( 'rte' )
      );
   });
});

SK.domreadypromise.then( () => {
   ReactDOM.render(
      React.createElement(
         Gallery,
         {
            content : 'Hello from the Gallery component!',
         }
      ),
      document.getElementById( 'gallery' )
   );
});

SK.domreadypromise.then( () => {
   ReactDOM.render(
      React.createElement(
         Form,
         {
            content : 'Hello from the Form component!',
         }
      ),
      document.getElementById( 'form' )
   );
});
