import React, {Component} from 'react';

import {HeaderComponent} from '../../components/Header-Component/HeaderComponent';

let condition = null;
export class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: 'Task\'r',
      textStatus: '',
      status: ''
    }
  }

  //Define your Offline online script here to change the text of the state
  updateOnlineStatus = () => {
    const statusBar = document.querySelector('#statusbar');
    if(navigator.onLine) {
      this.setState({
        textStatus: 'You\'re currently Online',
        status: 'online'
        });
        setTimeout(()=> {
          this.setState({status: ''});
        }, 2500)

    } else {
      this.setState({
        textStatus: 'You\'re currently Offline',
        status: 'offline'
        })
    }


  }

  componentDidMount() {
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  }
  render() {
    return(
      <HeaderComponent headerTitle={this.state.headerTitle} textStatus={this.state.textStatus} status={this.state.status}/>
    );
  }
}