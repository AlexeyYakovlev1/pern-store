import { IProduct } from "interfaces/product.interface";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import classes from "./List.module.sass";

const List = () => {
    const products = useSelector((state:any) => state.products.list);
    const Item = React.lazy(() => import("./Item/Item"));
    
    return (
        <ul className={classes.list}>
            {products.length ? products.map((product:IProduct) => {
                return (
                    <Suspense
                        key={product.id}
                        fallback={<span>Загрузка продукта...</span>}
                    >
                        <Item  {...product} />
                    </Suspense>
                )
            }) : <span>Продуктов не найдено...</span>}
        </ul>
    )
}

export default List;