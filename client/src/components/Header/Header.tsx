import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Header.module.sass";
import cn from "classnames";
import Menu from "./Menu/Menu";
import { useSelector } from "react-redux";

interface IHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header = ({ className, ...props }:IHeaderProps) => {
    const userRole = useSelector((state:any) => state.user.infoUser.role);
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
        },
        {
            name: "Выйти"
        }
    ];
    
    if (userRole === "ADMIN") {
        const obj = {
            name: "Админ",
            link: "/admin"
        };

        menuListUser.unshift(obj)
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
            </div>
        </header>
    )
}

export default Header;