import React, {FC} from 'react';
import {ITask} from '../interfaces/Task'

interface Props {
  task: ITask;
}
const TodoTask = ({task}: Props) => {
  return <div className="task">
    <div className="content">
      <span>{task.taskName}</span>
      <span>{task.deadline}</span>
    </div>
    <button>X</button>
    </div>
}

export default TodoTask;