import React, { useState, useEffect } from 'react';
import Topic from './components/header/topic';
import './App.css';
import TodoBox from './components/todobox/todobox';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <Topic text="Todo"/>
      <div className="container">
        <div className="list">
        {todos.map(prop => (
          <TodoBox prop={prop}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
