import React from 'react';
import { Animate } from 'react-simple-animate';
import './image_styles.css';

const Image = ( props ) => {
   return (
      <div>
         <Animate
            play={ true }
            startStyle={{ transform: "translateX(0px)" }}
            endStyle={{ transform: "translateX(200px)" }}
         >
         <img className="sk-img" src={ props.url || 'https://place-hold.it/250' }/>
         </Animate>
      </div>
   );
};

export default Image;
