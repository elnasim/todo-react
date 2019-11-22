import React, { useState, useEffect } from "react";
import AddForm from "./components/AddForm/AddForm";
import TodoItem from "./components/TodoItem/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => response.json())
      .then(json => setTodos(json));
  }, []);

  const addItem = text => {
    const item = {
      id: Date.now(),
      title: text
    };
    setTodos(todos.concat([item]));
  };

  const removeItem = id => {
    setTodos(todos.filter(item => item.id !== id));
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>ToDo List</h1>

        <AddForm addItem={addItem} />

        <div className='todos'>
          {todos.length ? (
            todos.map(item => {
              return <TodoItem item={item} key={item.id} remove={removeItem} />;
            })
          ) : (
            <div>Задачи отсутствуют</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
