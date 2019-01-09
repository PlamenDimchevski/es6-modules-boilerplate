import React from 'react';
import Wrapper from './../../components/Wrapper';
import Text from './../../components/Text';
import Input from './../../components/Input';

const Form = ( props ) => {
   return (
      <Wrapper name="Form Wrapper">
         <Text value={ props.content }/>
         <Input label="Form input 1" name="input1"/>
         <Input label="Form input 2" name="input2"/>
      </Wrapper>
   );
};

export default Form;
