import React from 'react';

const Image = ( props ) => {
   return (
      <div>
         <img src={ props.url || 'https://place-hold.it/250'}/>
      </div>
   );
};

export default Image;
