import axios from "axios";
import MainLayout from "components/layouts/MainLayout/MainLayout";
import Button from "components/UI/button/Button";
import usePrice from "hooks/usePrice";
import { IInfoProduct, IProduct } from "interfaces/product.interface";
import React from 'react';
import { useParams } from "react-router-dom";
import classes from "./Product.module.sass";
import cn from "classnames";

const Product = () => {
    const [product, setProduct] = React.useState<IProduct>({
            name: "Xiaomi Redmi 9A",
            price: 9990,
            id: 1,
            img: "/30062792bb.jpg",
            brandId: 6,
            typeId: 1,
            rating: 3
        });
    const price = usePrice(product.price);
    const params:any = useParams();
    const info = [
        {id: 1, title: "Класс", description: "смартфон", deviceId: 1},
        {id: 2, title: "Тип корпуса", description: "моноблок", deviceId: 1},
        {id: 3, title: "Технология GSM 850", description: "есть", deviceId: 1},
        {id: 4, title: "Технология GSM 900/1800", description: "есть", deviceId: 1},
        {id: 5, title: "Технология 3G", description: "есть", deviceId: 1},
        {id: 6, title: "Технология 4G (LTE)", description: "есть", deviceId: 1},
        {id: 7, title: "Количество SIM-карт", description: "2SIM", deviceId: 1},
        {id: 8, title: "Тип SIM-карты", description: "нано-SIM", deviceId: 1},
    ];

    // React.useEffect(() => {
    //    axios({
    //        url: `http://localhost:5000/api/device/${params.id}`,
    //        method: "GET"
    //    })
    //     .then((response) => {
    //         setProduct(response.data.device)
    //     })
    //     // eslint-disable-next-line   
    // }, []);

    return (
        <MainLayout>
            <div className={cn(classes.product, "container")}>
                <div className={classes.image}>
                    <img src={product.img} alt={product.name} />
                </div>
                <div className={classes.info}>
                    <header className={classes.infoHeader}>
                        <h2 className={classes.name}>{product.name}</h2>
                        <span className={classes.rating}>
                            <img src="/star.svg" alt="" width="20" height="20" />
                            <span>{product.rating}</span>
                        </span>
                        <span className={classes.price}>{price}</span>
                        <Button className={classes.button}>В корзину</Button>
                    </header>
                    <div className={classes.infoBody}>
                        <h3 className={classes.infoBodyTitle}>Общие характеристики</h3>
                        <ul className={classes.infoBodyList}>
                            {info.map((item:IInfoProduct) => {
                                return (
                                    <li key={item.id}>
                                        <span className={classes.infoTitle}>{item.title}</span>
                                        <p className={classes.infoDescription}>&nbsp;{item.description}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Product;