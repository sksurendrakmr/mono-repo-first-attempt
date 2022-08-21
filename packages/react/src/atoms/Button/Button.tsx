import React from 'react'


type ButtonProps = {
    label: string;
    class?: string;
}
const Button = ({ label }: ButtonProps) => {
    return (
        <button>{label} - here</button>
    )
}

export default Button;
