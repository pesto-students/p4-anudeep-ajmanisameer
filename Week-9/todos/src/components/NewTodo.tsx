import './NewTodo.css'
import React, { useState } from 'react'

const NewTodo = (props: any) => {
  const [enteredTodo, setEnteredTodo] = useState('')

  const todoChangeHandler = (event: any) => {
    setEnteredTodo(event.target.value)
  }

  const submitHandler = (event: any) => {
    event.preventDefault()
    const todoData = {
      id: Math.random().toString(),
      todo: enteredTodo
    }
    console.log(todoData)
    props.onSaveTodo(todoData)
    setEnteredTodo('')
  }


  return (
    <div className='new-todo'>
      <form onSubmit={submitHandler}>
        <div className='new-todo__controls'>
          <div className='new-todo__control'>
            <label>Add New</label>
            <input type="text" value={enteredTodo} onChange={todoChangeHandler} />
          </div>
        </div>
        <div className='new-todo__actions'>
          <button type='submit'>Add Todo</button>
        </div>
      </form>
    </div>
  );
}

export default NewTodo;