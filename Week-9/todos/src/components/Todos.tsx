import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";
import React, { useState } from 'react'


const Todos = () => {
  const DUMMY_TODO = JSON.parse(localStorage.getItem('todos') || '[]')

  const [todos, setTodos] = useState<any[]>(DUMMY_TODO)
  const enptyTodos = todos.length === 0;
  const handleSaveTodo = (todo: any) => {
    // setTodos([enteredTodo, ...todos])
    setTodos((prevTodo) => {
      localStorage.setItem('todos', JSON.stringify([todo, ...prevTodo]))
      return [todo, ...prevTodo]
    })
  }

  return <>
    <NewTodo onSaveTodo={handleSaveTodo} />

    {!enptyTodos &&
      <div>
        {todos.map(each => {
          return (
            <div key={each.id}>
              <TodoItem id={each.id} todo={each.todo} checked={each.checked} />
            </div>
          )
        })}

      </div>
    }


  </>;
}

export default Todos;   