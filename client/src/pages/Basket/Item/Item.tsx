import classes from "./Item.module.sass";
import { IProduct } from "../../../interfaces/product.interface";
import usePrice from "hooks/usePrice";
import Button from "components/UI/button/Button";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { removeProductFromBasket } from "redux/actions/basket.actions";
import Cookies from "js-cookie";
import React from "react";

const Item = (props:IProduct) => {
    const price = usePrice(props.price);
    const dispatch = useDispatch();
    const [basketDevice, setBasketDevice] = React.useState(true);

    const removeFromBasketHandler = () => {
        axios({
            method: "DELETE",
            url: `http://localhost:5000/api/basket/remove`,
            data: { productId: props.id },
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
            .then(() => {
                dispatch(removeProductFromBasket(props));
                setBasketDevice(false);
            })
    }

    return (
        <li className={classes.item}>
            <div className={classes.photo}>
                <img src={props.img} alt={props.name} />
            </div>
            <div className={classes.info}>
                <header className={classes.infoHeader}>
                    <h2 className={classes.name}>
                        <NavLink to={`/product/${props.id}`}>{props.name}</NavLink>
                    </h2>
                    <span className={classes.price}>{price}</span>
                </header>
                {basketDevice && <div className={classes.actions}>
                    <Button>Купить</Button>
                    <Button className={classes.removeButton} onClick={removeFromBasketHandler}>Удалить</Button>
                </div>}
            </div>
        </li>
    )
}

export default Item;