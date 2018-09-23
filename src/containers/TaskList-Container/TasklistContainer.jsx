import React, {Component} from 'react';
import {Service} from '../../service/service';
import {PubSub} from '../../service/pubsub';
import {TaskComponent} from '../../components/Task-Component/TaskComponent';

const pubsub = PubSub();
export class TaskListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksArr: []
    }
  }

  switchFn = (type, obj) => {
    const types = {
      'added': () => {
        return pubsub.publish('getData', obj);
      },

      'modified': () => {
        return pubsub.publish('updateData', obj);
      },

      'removed': () => {
        return pubsub.publish('removedData', obj);
      }
    };
    if(typeof types[type] !== 'function') {
      return 'default';
    }
    return types[type]();
  }

  getAllTasks = () => {
    Service.getAllTasks().onSnapshot((snapshot)=> {
      snapshot.docChanges().forEach((change) => {
        const changeType = change.type;
        const data = change.doc.data();
        const dataId = change.doc.id;
        const dataObj = {
          dataId,
          data,
        };
        this.switchFn(changeType, dataObj);
    });
  });
  }

  getTaskSubscription = () => {
    pubsub.subscribe('getData', (data) => {
      this.setState({
        tasksArr: [...this.state.tasksArr, data]
      })

      console.log(this.state.tasksArr);
    })
  }

  componentDidMount() {
    this.getAllTasks();
    this.getTaskSubscription();
  }

   render() {
    return(
      <div>
        <h1>Welcome to Task'R App</h1>
        <TaskComponent tasks={this.state.tasksArr}/>
      </div>
    );
  }
}