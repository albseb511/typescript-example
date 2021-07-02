
import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoItem, { TodoItemType } from './TodoItem';


const Todo = () : JSX.Element => {
    const [todos, setTodos] = useState<TodoItemType[]>([]);

    const handleAdd = ( value: string ) => {
        const payload : TodoItemType = {
            title: value,
            status: false,
            id: todos.length + 1
        }

        setTodos( [...todos, payload] )
    }   

    return (
        <div>
            <TodoInput onClick={handleAdd} />
            { todos.map( item=> <TodoItem key={item.id} data={item} />)}
        </div>
    )
}

export default Todo
