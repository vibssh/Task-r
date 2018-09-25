import React, { Component } from 'react';
import './App.css';

import {HeaderContainer} from './containers/Header-Container/HeaderContainer';
import {TaskListContainer} from './containers/TaskList-Container/TasklistContainer';
import {AddTaskContainer} from './containers/AddTask-Container/AddTaskContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <TaskListContainer />
        <AddTaskContainer />
      </div>
    );
  }
}

export default App;