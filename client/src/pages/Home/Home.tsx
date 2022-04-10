import MainLayout from "components/layouts/MainLayout/MainLayout";
import classes from "./Home.module.sass";
import cn from "classnames";
import List from "components/Products/List";
import Type from "components/Filter/Type/Type";
import Brand from "components/Filter/Brand/Brand";

const Home = () => {
    return (
        <MainLayout>
            <div className={cn(classes.home, "container")}>
                <Type className={classes.type} />
                <div className={classes.products}>
                    <Brand className={classes.brands} />
                    <List />
                </div>
            </div>
        </MainLayout>
    )
}

export default Home;