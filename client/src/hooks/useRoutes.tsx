import About from "pages/About/About";
import Admin from "pages/Admin/Admin";
import Basket from "pages/Basket/Basket";
import Home from "pages/Home/Home";
import Product from "pages/Product/Product";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

const useRoutes = (isAuth: boolean = false, admin:boolean = false) => {
    if (!isAuth) {
        return (
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registration" component={Registration} />
                <Redirect to="/login" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/basket" component={Basket} />
            <Route path="/product/:id" component={Product} />
            {admin && <Route exact path="/admin" component={Admin} />}
            <Redirect to="/" />
        </Switch>
    )
}

export default useRoutes;