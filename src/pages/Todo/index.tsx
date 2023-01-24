import React, { useState, useRef } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'

const Todo = () => {
    const[todos, setTodos] = useState([
        {id: "", name: "", checked: false}
    ])

    const todoNameRef = useRef<HTMLInputElement>(null!)

    const handleAddTodo = () =>{
        //タスクを追加する。
        const name = todoNameRef.current?.value

        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), name: name, checked: false}]
        })

        todoNameRef.current.value = ""
    }

    // チェックボックスにcheckを付ける処理
    const toggleTodo = (id: string) => {
        console.log('ID:'+id)
        // todosの値をnewTodosにコピー
        const newTodos = {...todos};
        // todo.idと引数のidが一致するものを取得
        const todo = newTodos.find((todo) => todo.id === id)
        if(todo !== undefined){
            //idが一致している場合、checkを反転
            todo.checked = !todo.checked
        }
        setTodos(newTodos);
    }

    return (
        <>
            <input type="text" ref={todoNameRef} />
            <button onClick={handleAddTodo}>タスクを追加</button>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </>
    )
}

export default Todo


