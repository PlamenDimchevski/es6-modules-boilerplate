import React from 'react';
import Wrapper from './../../components/Wrapper';
import Image from './../../components/Image';

const Gallery = SK.Gallery = ( props ) => {
   return (
      <Wrapper name="Gallery Wrapper">
         <div><Image url="https://place-hold.it/250x250&text=GalleryImage1"/></div>
         <div><Image url="https://place-hold.it/250x250&text=GalleryImage2"/></div>
         <div><Image url="https://place-hold.it/250x250&text=GalleryImage3"/></div>
      </Wrapper>
   );
};

export default Gallery;
