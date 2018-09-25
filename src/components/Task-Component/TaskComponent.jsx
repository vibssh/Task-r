import React from 'react';
import {Task} from '../StyledComponents/TaskStyledComponent';
import {ButtonComponent} from '../UI-Components/ButtonComponent';
import {SpanComponent} from '../UI-Components/SpanComponent';

export const TaskComponent = (props) => {
  const tasks = props.tasks;

  return (
    tasks.map((task)=>{
      return (
        <Task key={task.dataId}>
          <SpanComponent spanText= {task.data.task} fixedwidth={true} />
          {/* Edit Button */}
          <ButtonComponent
            buttonText={'Edit Task'}
            primary= {true}
            dataAttribute={task.dataId}
            buttonEvent={props.updateEvent ? props.updateEvent : undefined}
          />
          {/* Delete Button */}
          <ButtonComponent
            buttonText='Delete Task'
            secondary='true'
            dataAttribute={task.dataId}
            buttonEvent={props.deleteEvent ? props.deleteEvent : undefined}
          />
        </Task>
      )
    })
  );
}