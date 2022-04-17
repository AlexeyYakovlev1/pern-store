import axios from "axios";
import Button from "components/UI/button/Button";
import { AlertContext } from "context/AlertContext";
import usePrice from "hooks/usePrice";
import { IBasketProduct, IProduct } from "interfaces/product.interface";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addProductToBasket, removeProductFromBasket } from "redux/actions/basket.actions";
import classes from "./Item.module.sass";
import Cookies from "js-cookie";

const Item = (props: IProduct) => {
    const price = usePrice(props.price);
    const dispatch = useDispatch();
    const { setAlert } = React.useContext(AlertContext);
    const basket = useSelector((state:any) => state.basket.list);
    const [basketDevice, setBasketDevice] = React.useState(false);

    React.useEffect(() => {
        basket.forEach((item:IBasketProduct) => {
            if (item.id === props.id) setBasketDevice(true);
        });

        // eslint-disable-next-line
    }, [basket]);

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
                setAlert({
                    type: "success",
                    message: response.data.message
                })
            })
            .catch((error) => {
                setAlert({
                    type: "error",
                    message: error.message
                })
            })
    }

    const removeFromBasketHandler = (currentId:number) => {
        axios({
            method: "DELETE",
            url: "http://localhost:5000/api/basket/remove",
            data: { productId: currentId },
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
            .then((response) => {
                dispatch(removeProductFromBasket(props));
                setBasketDevice(false);
                setAlert({
                    type: "success",
                    message: response.data.message
                })
            })
            .catch((error) => {
                setAlert({
                    type: "error",
                    message: error.message
                })
            })
    }

    return (
        <li className={classes.item}>
            <div className={classes.header}>
                <img src={props.img} alt={props.name} />
                <span className={classes.name}>
                    <NavLink to={`/product/${props.id}`}>
                        {props.name}
                    </NavLink>
                </span>
            </div>
            <div className={classes.body}>
                <span className={classes.price}>{price}</span>
            </div>
            {!basketDevice
                ?
                <Button
                    onClick={() => addToBasketHandler(props.id)}
                >
                    <span>Добавить в корзину</span>
                </Button>
                :
                <Button
                    onClick={() => removeFromBasketHandler(props.id)}
                >
                    <span>Удалить из корзины</span>
                </Button>
            }
        </li>
    )
}

export default Item;