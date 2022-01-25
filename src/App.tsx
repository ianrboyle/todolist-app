
import React, {FC, ChangeEvent, useState} from 'react';
import {ITask} from "./interfaces/Task"
import TodoTask from "./components/TodoTask"
import './App.css';



const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value) 
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline}
    setTodoList([...todoList, newTask])
    setTask("");
    setDeadline(0)
  }

  const completeTask = (toDeleteTaskName: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== toDeleteTaskName;
    }))
  }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer"> 
        <input type="text" placeholder="test" value={task} name="task" onChange={handleChange}/>
        <input type="number" name="deadline" value={deadline} placeholder="Deadline (days)" onChange={handleChange}/>
        </div>    
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, i: number) => {
          return <TodoTask completeTask={completeTask} key={i} task={task}/>
        })}
      </div>
    </div>
  );
}

export default App;
