import React from 'react';
//Styled Components Import here
import {Header, Logo, HeaderTitle} from '../StyledComponents/HeaderStyledComponents';

export const HeaderComponent = (props) => {
  return (
    <Header>
      <Logo />
      <HeaderTitle>
        <h1>{props.headerTitle}</h1>
      </HeaderTitle>

    </Header>
  );
}
