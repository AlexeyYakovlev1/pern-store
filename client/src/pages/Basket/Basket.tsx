import MainLayout from "components/layouts/MainLayout/MainLayout";
import classes from "./Basket.module.sass";
import cn from "classnames";
import { useSelector } from "react-redux";
import { IProduct } from "interfaces/product.interface";
import React, { Suspense } from "react";

const Basket = () => {
    const infoBasket = useSelector((state:any) => state.basket.list);
    const Item = React.lazy(() => import("./Item/Item"));

    return (
        <MainLayout>
            <div className={cn(classes.basket, "container")}>
                {infoBasket.length ? <ul className={classes.list}>
                    {infoBasket.map((item:IProduct) => {
                        return (
                            <Suspense
                                key={item.id}
                                fallback={<span>Загрузка продукта...</span>}
                            >
                                <Item {...item} />
                            </Suspense>
                            
                        )
                    })}
                </ul> : <h2>Корзина пуста</h2>}
            </div>
        </MainLayout>
    )
}

export default Basket;