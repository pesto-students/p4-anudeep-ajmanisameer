import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";
import React, { useState } from 'react'

const DUMMY_TODO = [
  {
    id: 1,
    todo: "Dummy Todo One"
  },
  {
    id: 2,
    todo: "Dummy Todo Two"
  }
]

const Todos = () => {
  const [todos, setTodos] = useState(DUMMY_TODO)
  
  const handleSaveTodo = (todo: any) => {
    // setTodos([enteredTodo, ...todos])
    setTodos((prevTodo) => {
      return [todo, ...prevTodo]
    })
  }

  return <> 
    <NewTodo onSaveTodo={handleSaveTodo}/>
    {todos.map(each => {
      return (
        <div key={each.id}>
          <TodoItem id={each.id} todo={each.todo} />
        </div>
      )
    })}
  </>;
}

export default Todos;   