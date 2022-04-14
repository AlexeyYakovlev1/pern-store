import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import classes from "./Header.module.sass";
import cn from "classnames";
import Menu from "./Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/actions/user.actions";
import Cookies from "js-cookie";

interface IHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header = ({ className, ...props }:IHeaderProps) => {
    const history = useHistory();
    const userRole = useSelector((state:any) => state.user.infoUser.role);
    const dispatch = useDispatch();
    const menuList = [
        {
            name: "Главная",
            link: "/"
        },
        {
            name: "О нас",
            link: "/about"
        }
    ];
    const menuListUser = [
        {
            name: "Корзина",
            link: "/basket"
        }
    ];

    if (userRole === "ADMIN") {
        menuListUser.unshift({
            name: "Админ",
            link: "/admin"
        })
    }

    const logoutHandler = () => {
        history.push("/login");
        dispatch(logOut({}));
        Cookies.set("token", "");
    }

    return (
        <header
            className={cn(classes.header, className, "container")}
            {...props}
        >
            <div className={classes.logo}>
                <NavLink to="/">
                    <h1 className={classes.logoText}>Онлайн Магазин Pern</h1>
                </NavLink>
            </div>
            <div className={classes.menu}>
                <Menu menuList={menuList} />
                <Menu menuList={menuListUser} className={classes.user} />
                <span
                    onClick={logoutHandler}
                    className={cn(classes.item)}
                >
                    Выйти
                </span>
            </div>
        </header>
    )
}

export default Header;