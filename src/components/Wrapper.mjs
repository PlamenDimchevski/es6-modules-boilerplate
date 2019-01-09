import React from 'react';

const Wrapper = ( props ) => {
   return (
      <div class="component-wrapper">
         <h2>I am { props.name }</h2>
         { props.children }
      </div>
   );
};

export default Wrapper;
