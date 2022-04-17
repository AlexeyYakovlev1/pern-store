import MainLayout from "components/layouts/MainLayout/MainLayout";
import classes from "./Basket.module.sass";
import cn from "classnames";
import { useSelector } from "react-redux";
import { IProduct } from "interfaces/product.interface";
import React, { Suspense } from "react";
import usePrice from "hooks/usePrice";

const Basket = () => {
    const { list, totalPrice } = useSelector((state:any) => state.basket);
    const price = usePrice(totalPrice);
    const Item = React.lazy(() => import("./Item/Item"));

    return (
        <MainLayout>
            <div className={cn(classes.basket, "container")}>
                {list.length ? 
                <>
                    <div className={classes.totalPrice}>Итоговая цена: <span>{price}</span></div>
                    <ul className={classes.list}>
                        {list.map((item:IProduct) => {
                            return (
                                <Suspense
                                    key={item.id}
                                    fallback={<span>Загрузка продукта...</span>}
                                >
                                    <Item {...item} />
                                </Suspense>
                                
                            )
                        })}
                    </ul>
                </>
                : <h2>Корзина пуста</h2>}
            </div>
        </MainLayout>
    )
}

export default Basket;