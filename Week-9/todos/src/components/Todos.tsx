import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";
import React, { useState } from 'react'

const DUMMY_TODO = [
  {
    id: 1,
    todo: "lorem ipusun varten ispagol"
  },
  {
    id: 2,
    todo: "Second todo"
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