import React from 'react'
import Todo from './Todo'

type Props = {
  todos: any
  toggleTodo: (id: string) => void
}

const TodoList = ({todos}:any, toggleTodo: (id: string) => void ) => {
  return todos.map((todo:any) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>)
}

export default TodoList
