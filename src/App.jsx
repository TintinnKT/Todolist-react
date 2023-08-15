import React, { useState, useEffect } from 'react';
import Topic from './components/header/topic';
import './App.css';
import TodoBox from './components/todobox/todobox';
import Adding from './components/Adding/Adding';
import Contact from './components/contact/Contact';

function App() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        const filteredTodos = data.filter(todo => todo.id >= 47 && todo.id <= 53);
        setTodos(filteredTodos);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const addTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };
  const sortedTodos = [...todos]

  return (
    <div className="App">
      <Topic text="Simple Todo" />
      <div className="container">
        <div className="list">
          {sortedTodos.map(prop => (
            <TodoBox prop={prop} />
          ))}
        </div>
        <div className="side">
          <div className="addcon"><Adding todo={addTodo} /></div>
          <div className="ct"><Contact /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
