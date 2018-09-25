import styled, {css} from 'styled-components';

export const OnlineOfflineStyledComponent = styled.div`
  display: block;
  width: 100%;
  padding: 1em 1.5em;
  background: #ccc;
  color: #333;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  transition: all .3s linear;

  ${props => props.online && css`
    opacity: 1;
    background: springgreen;
    color: #333;
  `}

  ${props => props.offline && css`
    opacity: 1;
    background: palevioletred;
    color: #fff;
  `}
`