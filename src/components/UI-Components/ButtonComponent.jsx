import React from 'react';

import {Button} from '../StyledComponents/ButtonStyledComponent';
export const ButtonComponent = (props) => {
  return (
    <Button
      primary={props.primary ? 'primary' : undefined}
      secondary={props.secondary ? 'secondary' : undefined}
      tertiary={props.tertiary ? 'tertiary' : undefined}
      data-id={props.dataAttribute ? props.dataAttribute : undefined}
      type={props.buttonType ? props.buttonType: undefined}
      id={props.buttonId ? props.buttonId: undefined}
      onClick={props.buttonEvent ? props.buttonEvent : undefined}
    >
      {props.buttonText}
    </Button>
  )
}