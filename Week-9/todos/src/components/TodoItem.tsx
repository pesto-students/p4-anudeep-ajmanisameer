import './TodoItem.css'
import React, { useState } from 'react'

const TodoItem = (props: any) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
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