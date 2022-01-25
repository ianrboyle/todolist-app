import React, {FC} from 'react';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <input type="text" placeholder="test" />
        <input type="number" placeholder="Deadline (days)" />
        <button>Add Task</button>
      </div>
      <div className="todoList">
      </div>
    </div>
  );
}

export default App;
