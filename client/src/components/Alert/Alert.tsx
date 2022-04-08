import React from 'react';
import classes from "./Alert.module.sass";
import cn from "classnames";
import { AlertContext } from "../../context/AlertContext";

const Alert = () => {
    const { alert, setAlert } = React.useContext(AlertContext);

    const closeHanlder = () => {
        setAlert({ message: "", type: "success" });
    }

    return (
        <div
            className={cn(classes.alert, {
                [classes.error]: alert.type === "error",
                [classes.success]: alert.type === "success"
            })}
        >
            <div>
                <span className={classes.title}>{alert.type.replace(alert.type[0], alert.type[0].toUpperCase())}</span>
                <p className={classes.description}>{alert.message}</p>    
            </div>
            <span onClick={closeHanlder} className={classes.close}>&#10006;</span>
        </div>
    )
}

export default Alert