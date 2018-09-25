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
  cursor: pointer;
  transition: all .3s linear;

  ${props => props.primary && css `
    background: #ffffff;
    &:hover {
      background: palevioletred;
      color: #ffffff;
    }
  `}

  ${props => props.secondary && css `
    background: palevioletred;
    color: #ffffff;

    &:hover {
      background: #ffffff;
      color: palevioletred;
    }

  `}

  ${props => props.tertiary && css `
    background: #333;
    color: #fff;
  `}

`