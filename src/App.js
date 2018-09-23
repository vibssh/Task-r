import React, { Component } from 'react';
import './App.css';

import {HeaderContainer} from './containers/Header-Container/HeaderContainer';
import {TaskListContainer} from './containers/TaskList-Container/TasklistContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <TaskListContainer />
      </div>
    );
  }
}

export default App;