import React, {Component} from 'react';

import {HeaderComponent} from '../../components/Header-Component/HeaderComponent';

export class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: 'Task\'r'
    }
  }

  render() {
    return(
      <HeaderComponent headerTitle={this.state.headerTitle}/>
    );
  }
}