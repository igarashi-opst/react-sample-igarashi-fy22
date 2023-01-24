import React from 'react'

const Todo = ({todo}:any, toggleTodo: (id: string) => void) => {
  
  // 自身のTodo.idを引数にtoggleTodoを呼び出す
  const handleTodoClick = () => {
    console.log('todo内')
    toggleTodo(todo.id)
    console.log('todo抜け')
  }

  return (
    <div>
      <label>
        <input
          type="checkbox" 
          checked={todo.checked}
          readOnly 
          onChange={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  )
}

export default Todo
