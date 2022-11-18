import './TodoItem.css'
import React, { useState } from 'react'

const TodoItem = (props: any) => {
  const [checked, setChecked] = useState(props.checked);

  const handleChange = () => {

    let todos = JSON.parse(localStorage.getItem('todos') || '[]')
    todos.forEach((todo:any) => {
      if(todo.id == props.id){
        todo.checked = !todo.checked
      }
    })
    localStorage.setItem('todos', JSON.stringify(todos))

    setChecked(!checked)
  }

  return (<div className='todo-item'>
    <div className='todo-item__description'>
      <h2>{props.todo}</h2>
      <div className='todo-item__action'>
        <input checked={checked} onChange={handleChange} type="checkbox" />
      </div>
    </div>
  </div>);
}

export default TodoItem;