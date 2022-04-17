import classes from "./Item.module.sass";
import { IProduct } from "../../../interfaces/product.interface";
import usePrice from "hooks/usePrice";
import Button from "components/UI/button/Button";
import { NavLink } from "react-router-dom";

const Item = (props:IProduct) => {
    const price = usePrice(props.price);

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
                <Button>Купить</Button>
            </div>
        </li>
    )
}

export default Item;