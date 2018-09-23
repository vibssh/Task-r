import React, { Component } from 'react';
import './App.css';

import {HeaderContainer} from './containers/Header-Container/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
      </div>
    );
  }
}

export default App;
