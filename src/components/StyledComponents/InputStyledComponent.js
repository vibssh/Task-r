import styled, {css} from 'styled-components';

export const Input = styled.input`
  -webkit-appearance: none;
    display: inline-block;
    padding: .375rem .75rem;
    margin-left: 1em;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    ${props => props.fullwidth && css`
      display: block;
      width: 100%;
    `}
`