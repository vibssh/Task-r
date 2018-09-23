import styled from 'styled-components';
import logoImg from '../../assets/images/icons/logo.svg';

export const Header = styled.header`
  padding: 4em;
  background: papayawhip;
  text-align: left;
`

export const Logo = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 50px;
  background: url(${logoImg}) no-repeat 50% 50%;
  background-size: 50px 50px;
  margin-right: 10px;
  overflow: hidden;
`

export const HeaderTitle = styled.div`
  display:inline-block;
  vertical-align: middle;
  > h1 {
    font-size: 1.75em;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`