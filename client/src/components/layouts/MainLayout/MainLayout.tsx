import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React from 'react'
import classes from "./MainLayout.module.sass";

interface IMainLayout {
    children:React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
    return (
        <div className={classes.layout}>
            <Header className={classes.header} />
            <div className={classes.body}>{children}</div>
            <Footer className={classes.footer} />
        </div>
    )
}

export default MainLayout;