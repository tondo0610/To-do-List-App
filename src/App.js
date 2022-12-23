import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [todoList, setTodoList] = useState([]);


  function handleTodoFormSubmit(value) {
    const newTodoList = [...todoList];
    newTodoList.push({
      id: Math.floor(Math.random() * 100),
      title: value,
      completed: false
    })
    setTodoList(newTodoList)
  }
  return (
    <div className="App">
      <h2>To-Do List</h2>
      <p>Enter text into the input field to add items to your list.</p>
      <p>Click the "X" to remove the item from your list.</p>
      <p>Click the item to mark it as complete.</p>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
