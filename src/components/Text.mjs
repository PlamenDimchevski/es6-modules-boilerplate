import React from 'react';
import './text_styles.css';

const Text = ( props ) => {
   return (
      <p className="sk-text">{ props.value }</p>
   );
};

export default Text;
