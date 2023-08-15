import React, { useState, useEffect } from 'react';
import Topic from './components/header/topic';
import './App.css';
import TodoBox from './components/todobox/todobox';
import Adding from './components/Adding/Adding';

function App() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        const filteredTodos = data.filter(todo => todo.id >= 11 && todo.id <= 25);
        setTodos(filteredTodos);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const addTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };
  const sortedTodos = [...todos].sort((a, b) => b.id - a.id);

  return (
    <div className="App">
      <Topic text="Todo" />
      <div className="container">
        <div className="list">
          {sortedTodos.map(prop => (
            <TodoBox prop={prop} />
          ))}
        </div>
        <div className="side"><Adding todo={addTodo} /></div>
      </div>
    </div>
  );
}

export default App;
