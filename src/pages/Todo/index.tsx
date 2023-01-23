import React, { useState, useRef } from 'react'
import TodoList from './TodoList'

const Todo = () => {
    const[todos, setTodos] = useState([
        {id: "", name: ""}
    ])

    const todoNameRef = useRef<HTMLInputElement>(null!)

    const handleAddTodo = () =>{
        //タスクを追加する。
        const name = todoNameRef.current?.value

        setTodos((prevTodos) => {
            return [...prevTodos, {id: name, name: name}]
        })

        todoNameRef.current.value = ""
    }

    return (
        <>
            <input type="text" ref={todoNameRef} />
            <button onClick={handleAddTodo}>タスクを追加</button>
            <TodoList todos={todos} />
        </>
    )
}

export default Todo


