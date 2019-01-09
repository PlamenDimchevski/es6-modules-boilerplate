import React from 'react';

const Input = ( props ) => {
   return (
      <React.Fragment>
         <label>{ props.label }</label>
         <input type="text" name={ props.name }/>
      </React.Fragment>
   );
};

export default Input;
