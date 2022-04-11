import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classes from "./Form.module.sass";
import cn from "classnames";

interface IFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
}

const Form = ({ className, children, ...props }:IFormProps) => {
    return (
        <div
            className={cn(classes.form, className)}
            {...props}
        >
            {children}
        </div>
    )
}

export default Form;