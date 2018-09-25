import React, {Component} from 'react';
import {Container} from '../../components/StyledComponents/ContainerStyledComponent';
import {InputField} from '../../components/UI-Components/InputFieldComponent';
import {ButtonComponent} from '../../components/UI-Components/ButtonComponent';
import {Service} from '../../service/service';

export class AddTaskContainer extends Component {

  addTaskHandler = (e) =>{
    e.preventDefault();
    const addTaskField = document.querySelector('#addTask');
    const task = addTaskField.value;
    const taskData = {
      task
    }
    if(taskData.task !== null || taskData.task !== undefined || taskData.task !== "") {
      //Do the post of data here
      Service.postATask(taskData).then(()=>{

      }).catch(err=>console.log(err));
      // This is moved outside the post event for offline use.
      addTaskField.value='';
      addTaskField.focus();
    }
  }

  editTaskHandler = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    const btn = e.target;
    const element = e.target.parentNode;
    const inputField = element.querySelector('#addTask');
    const editedTask = inputField.value;
    const editedData = {
      task: editedTask
    }

    if(editedData.task !== null || editedData.task !== undefined || editedData.task !== "") {
        Service.updateTask(id, editedData).then(() => {
          inputField.value = '';
          inputField.focus();
          btn.textContent = 'Add Task';
          btn.id='addTaskBtn';
        }).catch(err => console.log(err));
      }
  }

  eventHandler = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if(id ==='addTaskBtn') {
      this.addTaskHandler(e);
    } else {
      this.editTaskHandler(e);
    }
  }

  render() {
    return(
      <Container>
        <form>
          <label htmlFor="addTask">Add Task</label>
          <InputField type="text" id="addTask" name="addTask" placeholder="Prepare slides.."/>
          <ButtonComponent buttonText='Add Task' tertiary='true' buttonType='submit' buttonId='addTaskBtn' buttonEvent={this.eventHandler} />
        </form>
      </Container>
    );
  }
}