import React, { useState } from 'react'

interface Props {
    onClick: ( value: string  ) => void;
}

const TodoInput = ({
    onClick
}: Props) => {
    const [state, setState] = useState<string | undefined>();

    const handleChange : React.ChangeEventHandler<HTMLInputElement> = e =>{
        setState(e.target.value);
    }

    const handleSubmit : React.MouseEventHandler<HTMLButtonElement> = () => {
        state && onClick(state)
    }

    return (
        <div>
            <input name="title" value={state} onChange={handleChange} placeholder="Add something"/>
            <button onClick={handleSubmit}>ADD</button>
        </div>
    )
}

export default TodoInput
