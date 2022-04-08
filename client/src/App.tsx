import useRoutes from "./hooks/useRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { AlertContext } from "./context/AlertContext";
import Alert from "./components/Alert/Alert";
import React from "react";
import { IAlert } from "./interfaces/alert.interface";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { setUserRed } from "redux/actions/user.actions";

const App = () => {
    const isAuth = useSelector((state:any) => state.user.isAuth);
    const routes = useRoutes(isAuth);
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:5000/api/user/auth",
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
            .then((response) => {
                Cookies.set("token", response.data.token);
                dispatch(setUserRed(response.data.infoUser));
            });
        // eslint-disable-next-line
    }, []);

    const [alert, setAlert] = React.useState<IAlert>({
        message: "", type: "success"
    });

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {alert.message && <Alert />}
            <Router>
                { routes }
            </Router>
        </AlertContext.Provider>
    );
}

export default App;