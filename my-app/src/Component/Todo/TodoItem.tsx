import React from 'react'

export type TodoItemType = {
    title: string,
    status: boolean,
    id: number
}

export interface TodoItemProps {
    data: TodoItemType
}

const TodoItem = ({
    data: {
        title,
        status,
        id
    }
}: TodoItemProps) => {
    return (
        <div style={{ padding: 10 , display: 'flex'}}>
            <div>{title}</div>
        </div>
    )
}

export default TodoItem
