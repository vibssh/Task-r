import React from 'react';
import {OnlineOfflineStyledComponent} from '../StyledComponents/OnlineOfflineStyledComponent';

export const OnlineOfflineComponent = (props) => {
  return (
    <OnlineOfflineStyledComponent
      online = {props.status ==='online' ? 'online': '' }
      offline = {props.status ==='offline' ? 'offline': '' }
      id="statusbar" >
        {props.statusText}
    </OnlineOfflineStyledComponent>
  );
}