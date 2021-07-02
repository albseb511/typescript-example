import React from 'react'

interface IProps {
    label: string;
    handleClick: () => void
}

const Button = ({
    label,
    handleClick
}: IProps) => {
    const onClick : React.MouseEventHandler<HTMLButtonElement> = () =>{
        handleClick()
    }
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}

export default Button
