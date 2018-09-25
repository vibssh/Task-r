import styled, {css} from 'styled-components';

export const Span = styled.span`
  display: inline-block;

  ${props => props.fixedWidth && css `
    width: 200px;
    text-align: left;
    text-transform: uppercase;
    font-weight: 600;
  `}
`
