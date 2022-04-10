import Button from "components/UI/button/Button";
import usePrice from "hooks/usePrice";
import { IProduct } from "interfaces/product.interface";
import { NavLink } from "react-router-dom";
import classes from "./Item.module.sass";

const Item = (props: IProduct) => {
    const price = usePrice(props.price);

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
            <Button>Добавить в корзину</Button>
        </li>
    )
}

export default Item