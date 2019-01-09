import React from 'react';
import { add } from 'skcore';
import { addm, x } from 'sklibrary';
import Wrapper from './../../components/Wrapper';
import Text from './../../components/Text';
import Image from './../../components/Image';

const RTE = SK.RTE = ( props ) => {
   return (
      <Wrapper name="RTE Wrapper">
         <Image/>
         <Text value={ props.content }/>
         <p>Add SK core: { add( 2, 3 ) }</p>
         <p>Add SK module: { addm( 2, 3 ) }</p>
         <p>X SK module: { x }</p>
      </Wrapper>
   );
};

export default RTE;
