import axios from "axios";
import MainLayout from "components/layouts/MainLayout/MainLayout";
import Button from "components/UI/button/Button";
import usePrice from "hooks/usePrice";
import { IBasketProduct, IInfoProduct, IProduct } from "interfaces/product.interface";
import React from 'react';
import { NavLink, useParams } from "react-router-dom";
import classes from "./Product.module.sass";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { addProductToBasket } from "redux/actions/basket.actions";

const Product = () => {
    const [product, setProduct] = React.useState<IProduct>({
        name: "",
        price: 0,
        id: 1,
        img: "",
        brandId: 0,
        typeId: 0,
        rating: 0,
        info: [
            {
                id: -1,
                title: "",
                description: "",
                deviceId: 1
            }
        ]
    });
    const price = usePrice(product.price);
    const basket = useSelector((state:any) => state.basket.list);
    const params:any = useParams();
    const [basketDevice, setBasketDevice] = React.useState(false);
    const dispatch = useDispatch();

    React.useEffect(() => {
       axios({
           url: `http://localhost:5000/api/device/${params.id}`,
           method: "GET"
       })
        .then((response) => {
            setProduct(response.data.device)
            basket.forEach((item:IBasketProduct) => {
                if (item.id === product.id) setBasketDevice(true);
            });
        })

        // eslint-disable-next-line   
    }, []);

    const addToBasketHandler = (currentId:number) => {
        axios({
            method: "POST",
            url: "http://localhost:5000/api/basket/add",
            data: { productId: currentId },
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
            .then((response) => {
                dispatch(addProductToBasket(response.data.device));
                setBasketDevice(true);
            })
    }

    return (
        <MainLayout>
            <div className={cn(classes.product, "container")}>
                <div className={classes.productTop}>
                    <div className={classes.image}>
                        <img src={`/${product.img}`} alt={product.name} />
                    </div>
                    <div className={classes.info}>
                        <h2 className={classes.name}>{product.name}</h2>
                        <span className={classes.rating}>
                            <img src="/star.svg" alt="" width="20" height="20" />
                            <span>{product.rating}</span>
                        </span>
                        <span className={classes.price}>{price}</span>
                        {!basketDevice ?
                            <Button className={classes.button} onClick={() => addToBasketHandler(product.id)}>В корзину</Button>
                            :
                            <Button className={classes.button}>
                                <NavLink to="/basket">Смотреть в корзине</NavLink>
                            </Button>
                        }
                    </div>
                </div>
                <div className={classes.infoBody}>
                    <h3 className={classes.infoBodyTitle}>Общие характеристики</h3>
                    <ul className={classes.infoBodyList}>
                        {product.info.map((item:IInfoProduct) => {
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
        </MainLayout>
    )
}

export default Product;