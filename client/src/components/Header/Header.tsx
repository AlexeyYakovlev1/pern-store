import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Header.module.sass";
import cn from "classnames";
import Menu from "./Menu/Menu";

interface IHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header = ({ className, ...props }:IHeaderProps) => {
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
            name: "Избранное",
            link: "/likes"
        },
        {
            name: "Выйти",
            link: "/logout"
        }
    ];

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

export default Header