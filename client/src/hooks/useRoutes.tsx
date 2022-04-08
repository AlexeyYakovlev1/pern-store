import About from "pages/About/About";
import Home from "pages/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

const useRoutes = (isAuth: boolean = false) => {
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
            <Redirect to="/" />
        </Switch>
    )
}

export default useRoutes;