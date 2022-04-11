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
import { setProductsRed } from "redux/actions/product.actions";

const App = () => {
    const { isAuth, infoUser: { role } } = useSelector((state:any) => state.user);
    const routes = useRoutes(isAuth, role === "ADMIN");
    const dispatch = useDispatch();

    React.useEffect(() => {
        // check auth
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

        // get products
        axios({
            method: "GET",
            url: "http://localhost:5000/api/device"
        })
            .then((response) => {
                dispatch(setProductsRed(response.data.devices));
            })
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