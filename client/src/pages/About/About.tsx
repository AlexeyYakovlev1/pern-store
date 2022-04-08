import MainLayout from "components/layouts/MainLayout/MainLayout"
import React from 'react'
import classes from "./About.module.sass";
import cn from "classnames";

const About = () => {
    return (
        <MainLayout>
            <div className={cn(classes.about, "container")}>
                <h1>About</h1>
            </div>
        </MainLayout>
    )
}

export default About