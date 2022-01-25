import React, {FC} from 'react';
import {ITask} from '../interfaces/Task'

interface Props {
  task: ITask;
  completeTask(toDeleteTaskName: string): void;
}
const TodoTask = ({task, completeTask}: Props) => {
  return <div className="task">
    <div className="content">
      <span>{task.taskName}</span>
      <span>{task.deadline}</span>
    </div>
    <button onClick={() => {
      completeTask(task.taskName)
    }}>X</button>
    </div>
}

export default TodoTask;