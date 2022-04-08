import { IMenuItem } from "interfaces/menu.interface";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./Menu.module.sass";
import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    menuList: Array<IMenuItem>;
}

const Menu = ({ menuList, className, ...props }: IMenuProps) => {
    const location = useLocation();

    return (
        <nav
            className={cn(classes.menu, className)}
            {...props}
        >
            <ul className={classes.list}>
                {menuList.map(item => {
                    return (
                        <li
                            key={item.link}
                            className={cn(classes.item, {
                                [classes.activeLink]: location.pathname === item.link
                            })}
                        > 
                            <NavLink to={item.link}>{item.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Menu