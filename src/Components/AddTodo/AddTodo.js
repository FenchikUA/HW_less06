import { v4 } from 'uuid';
import React, { useState } from 'react'


const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = useState('')
  function saveTodo() {
    if (value.trim() !== '') {
      setTodo(
        [
          ...todo, {
            id: v4(),
            title: value,
            status: true
          }
        ]
      )
    }
    setValue('')
  }
  return (
    <div className='todo-add-all'>
      <input className='todo-input' placeholder='ENTER YOUR TASK' value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={saveTodo} className='todo-add'>Add</button>
    </div>
  )
}

export default AddTodo
