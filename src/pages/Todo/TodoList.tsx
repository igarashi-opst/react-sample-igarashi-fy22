import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}:any) => {
  return todos.map((todo:any) => <Todo todo={todo} key={todo.name} />)
}

export default TodoList
