import React from 'react'

const TodoList = ({ todo, setTodo }) => {
  function deleteTodo(id) {
    let newTodo = [...todo].filter(item => item.id !== id);
    setTodo(newTodo)
  }
  function statusTodo(id) {
    let newTodo = [...todo].filter(item => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item
    })
    setTodo(newTodo)
  }
  return (
    <div>
      {
        todo.map(item => (
          <div key={item.id} className={item.status ? 'block-view' : 'block-view done'}>
            <div className='block-view-title'>{item.title}</div>
            <div className='todo-view-btn'>
              <div className='btn-done' onClick={() => statusTodo(item.id)}>&#10004;</div>
              <div className='btn-delete' onClick={() => deleteTodo(item.id)}>&#10006;</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TodoList
