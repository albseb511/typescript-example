import React, { useState } from 'react'
import Button from './Button'

interface Props {
    
}

const Counter : React.FunctionComponent<Props> = (props) => {
    const [counter, setCounter] = useState<number>(0);

    const handleClick = (value: number) => {
        setCounter(prev=>prev+value)
    }
    return (
        <div>
            <div>
                Counter
            </div>
            <h3>{counter}</h3>
            <div>
                <Button label="ADD" handleClick={()=>handleClick(1)}/>
                <Button label="REDUCE" handleClick={()=>handleClick(-1)}/>
            </div>
        </div>
    )
}

export default Counter
