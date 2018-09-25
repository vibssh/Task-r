import React from 'react';
//Styled Components Import here
import {Header, Logo, HeaderTitle} from '../StyledComponents/HeaderStyledComponents';
import {OnlineOfflineComponent} from '../UI-Components/OnlineOfflineComponent';

export const HeaderComponent = (props) => {
  console.log(props);
  return (
    <Header>
      <OnlineOfflineComponent statusText={props.textStatus} status={props.status}/>
      <Logo />
      <HeaderTitle>
        <h1>{props.headerTitle}</h1>
      </HeaderTitle>
    </Header>
  );
}
