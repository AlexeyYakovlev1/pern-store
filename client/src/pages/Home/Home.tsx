import MainLayout from "components/layouts/MainLayout/MainLayout";
import React from 'react';
import classes from "./Home.module.sass";
import cn from "classnames";

const Home = () => {
    return (
        <MainLayout>
            <div className={cn(classes.home, "container")}>
                <h1>Home page</h1>
            </div>
        </MainLayout>
    )
}

export default Home;