import React from 'react';
import {Task} from '../StyledComponents/TaskStyledComponent';

export const TaskComponent = (props) => {
  const tasks = props.tasks;
  tasks.sort(function(a, b) {
    console.log(a);
    return b - a; //Todo add somesort of data created to sort it
  })
  return (
    tasks.map((task)=>{
      return <Task key={task.dataId}>{task.data.task}</Task>
    })
  );
}