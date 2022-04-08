import axios from "axios";
import { AlertContext } from "context/AlertContext";
import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import Title from "../../components/UI/Title/Title";
import { IUser } from "../../interfaces/user.interface";
import classes from "./Registration.module.sass";

const Registration = () => {
    const history = useHistory();
    const [user, setUser] = React.useState<IUser>({
        email: "", password: "", role: "", id: -1, createdAt: new Date()
    });
    const { setAlert } = React.useContext(AlertContext);

    const registerHandler = async(event:any) => {
        event.preventDefault();
        
        axios({
            method: "POST",
            url: "http://localhost:5000/api/user/registration",
            data: user
        })
            .then((response:any) => {
                setAlert({ message: response.data.message, type: "success" })
                history.push("/login");
            }).catch((error) => setAlert({ message: error.message, type: "error" }));
    };

    return (
        <div className={classes.registration}>
            <header className={classes.header}>
                <Title tag="h1">Регистрация</Title>
            </header>
            <form className={classes.form} onSubmit={registerHandler}>
                <Input
                    value={user.email}
                    onChange={event => setUser({ ...user, email: event.target.value })}
                    type="email"
                    placeholder="Email"
                />
                <Input
                    value={user.password}
                    onChange={event => setUser({ ...user, password: event.target.value })}
                    type="password"
                    placeholder="Пароль"
                />
                <Button>Зарегистрироваться</Button>
            </form>
            <p className={classes.text}>
                Есть аккаунт? <NavLink to="/login">Войти</NavLink>
            </p>
        </div>
    )
}

export default Registration;