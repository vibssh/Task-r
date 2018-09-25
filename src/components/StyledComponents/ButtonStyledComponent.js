import styled, {css} from 'styled-components';

export const Button = styled.button`
  -webkit-appearance: none;
  display: inline-block;
  padding: 15px 10px;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 4px;


  ${props => props.primary && css `
    background: #ffffff;
  `}

  ${props => props.secondary && css `
    background: palevioletred;
    color: #ffffff;
  `}

  ${props => props.tertiary && css `
    background: #333;
    color: #fff;
  `}

`