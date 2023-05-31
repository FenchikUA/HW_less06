import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';
import AddTodo from './Components/AddTodo/AddTodo';
import './style.css';
import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className='container'>
      <div className='block'>
        <Header />
        <TodoList todo={todo} setTodo={setTodo} />
        <AddTodo todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
