import React from 'react';
import {Span} from '../StyledComponents/SpanStyleComponent';

export const SpanComponent = (props) => {
  return (
    <Span
      fixedWidth = {props.fixedwidth ? props.fixedwidth : undefined}>
      {props.spanText}
    </Span>
  )
}