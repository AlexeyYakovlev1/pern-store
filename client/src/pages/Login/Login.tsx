import axios from "axios";
import { AlertContext } from "context/AlertContext";
import React from 'react';
import { NavLink } from "react-router-dom";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import Title from "../../components/UI/Title/Title";
import { IUser } from "../../interfaces/user.interface";
import classes from "./Login.module.sass";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { IActionUser } from "interfaces/action.interface";
import { setUserRed } from "redux/actions/user.actions";

const Login = () => {
    const dispatch = useDispatch();
    const { setAlert } = React.useContext(AlertContext);
    const [user, setUser] = React.useState<IUser>({
        email: "", password: "", role: "", id: -1, createdAt: new Date()
    });

    const loginHandler = (event:any) => {
        return (dispatch:React.Dispatch<IActionUser>) => {
            event.preventDefault();

            axios({
                method: "POST",
                url: "http://localhost:5000/api/user/login",
                data: user,
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((response) => {
                    Cookies.set("token", response.data.token);
                    dispatch(setUserRed(user));
                    window.location.reload();
                })
                .catch((err) => {
                    setAlert({
                        type: "error",
                        message: err.message
                    })
                })
        }
    }

    return (
        <div className={classes.login}>
            <header className={classes.header}>
                <Title tag="h1">Вход</Title>
            </header>
            <form className={classes.form} onSubmit={(event) => dispatch(loginHandler(event))}>
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
                <Button>Войти</Button>
            </form>
            <p className={classes.text}>
                Нет аккаунта? <NavLink to="/registration">Зарегистрироваться</NavLink>
            </p>
        </div>
    )
}

export default Login;