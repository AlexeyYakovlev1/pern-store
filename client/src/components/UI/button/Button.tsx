import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import cn from "classnames";
import classes from "./Button.module.sass";

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>  {
    children: React.ReactNode;
}

const Button = ({ children, className, ...props }: IButtonProps) => {
    return (
        <button
            className={cn(classes.button, className)}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button