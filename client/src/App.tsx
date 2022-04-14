import useRoutes from "./hooks/useRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { AlertContext } from "./context/AlertContext";
import Alert from "./components/Alert/Alert";
import React from "react";
import { IAlert } from "./interfaces/alert.interface";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "http/user";
import Cookies from "js-cookie";
import { setUserRed } from "redux/actions/user.actions";
import { getProducts } from "http/products";
import { setProductsRed } from "redux/actions/product.actions";
import { setTotalCount } from "redux/actions/pagination.actions";
import { getBasket } from "http/basket";
import { setBasket } from "redux/actions/basket.actions";

const App = () => {
    const { isAuth, infoUser: { role } } = useSelector((state:any) => state.user);
    const { page, limit } = useSelector((state:any) => state.pagination);
    const { selectedType, selectedBrand } = useSelector((state:any) => state.selected);
    const routes = useRoutes(isAuth, role === "ADMIN");
    const dispatch = useDispatch();

    React.useEffect(() => {
        auth().then((response) => {
            Cookies.set("token", response.token);
            dispatch(setUserRed(response.infoUser));
        });

        getProducts(null, null, 1, 2).then((response) => {
            dispatch(setProductsRed(response.devices.rows));
            dispatch(setTotalCount(response.devices.count));
        })

        getBasket().then((response) => {
            dispatch(setBasket(response.basket));
        })
        
        // eslint-disable-next-line
    }, []);

    React.useEffect(() => {
        getProducts(selectedType, selectedBrand, page, limit).then((response) => {
            dispatch(setProductsRed(response.devices.rows));
            dispatch(setTotalCount(response.devices.count));
        })
        
        // eslint-disable-next-line
    }, [page, selectedType, selectedBrand]);

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