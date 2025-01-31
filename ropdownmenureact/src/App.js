
import './App.css';
import {useState} from 'react';

function App() {


  

  return (
    <div className="App">
     <h1>ToDo List App</h1>
     <textarea
     placeholder='Enter task description'
     ></textarea>
     <button>Add Task</button>
     <br></br>
   <input type='text'placeholder='Enter a new task1'></input>
   <button>Delete</button><br></br>
   <input type='text'placeholder='Enter a new task2'></input>
   <button>Delete</button><br></br>
   <input type='text'placeholder='Enter a new task3'></input>
   <button>Delete</button>
    </div>
  );
}

export default App;
