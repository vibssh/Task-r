import React from 'react';
import {Input} from '../StyledComponents/InputStyledComponent';
export const InputField = (props) => {
  return (
    <Input
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      fullwidth={props.fullwidth ? props.fullwidth : undefined} />
  );
}