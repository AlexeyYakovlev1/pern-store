import { DetailedHTMLProps, HTMLAttributes } from "react";
import classes from "./Footer.module.sass";
import cn from  "classnames";

interface IFooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer = ({ className, ...props }:IFooterProps) => {
    return (
        <footer
            className={cn(classes.footer, className)}
            {...props}
        >
            <div className="container">
                <p className={classes.text}>Copyright © 2021 Pern, Inc.</p>
            </div>
        </footer>
    )
}

export default Footer