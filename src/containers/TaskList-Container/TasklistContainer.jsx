import React, {Component} from 'react';
import {Service} from '../../service/service';
import {PubSub} from '../../service/pubsub';
import {TaskComponent} from '../../components/Task-Component/TaskComponent';
import {Container} from '../../components/StyledComponents/ContainerStyledComponent';

const pubsub = PubSub();

export class TaskListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksArr: [],
      editButtonText: 'Edit Button'
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
    })
  }

  getUpdatedTask = () => {
    pubsub.subscribe('updateData', (data) => {
      const taskArray = this.state.tasksArr;
      const updatedItemIndex = taskArray.findIndex(x=>x.dataId === data.dataId);

      if (updatedItemIndex !== -1) {
          taskArray[updatedItemIndex] = data;
          this.setState({
            tasksArr: taskArray
          })
      }
    });
  }

  deleteEventUIHandler = (e) => {
    const parentNode = e.target.parentNode;
    const id = e.target.getAttribute('data-id');
    Service.deleteTask(id).then(() => {
      parentNode.remove();
    })
  }


  updateEventUIHandler = (e) => {
    e.preventDefault();
    const addInputField = document.querySelector('#addTask');
    const submitTaskButton = document.querySelector('#addTaskBtn');
    const id = e.target.getAttribute('data-id');
    const element = e.target.parentNode;
    const span = element.querySelector('span');
    const spanText = span.textContent;
    addInputField.value = spanText;
    addInputField.focus();
    submitTaskButton.textContent="Edit Task"
    submitTaskButton.id="editTaskBtn"
    submitTaskButton.setAttribute('data-id', id);
  }

  componentDidMount() {
    this.getAllTasks();
    this.getTaskSubscription();
    this.getUpdatedTask();
  }

   render() {
    return(
      <Container>
        <h1>Welcome to Task'r</h1>
        <TaskComponent
          tasks={this.state.tasksArr}
          updateEvent = {this.updateEventUIHandler}
          deleteEvent = {this.deleteEventUIHandler}
        />
      </Container>
    );
  }
}