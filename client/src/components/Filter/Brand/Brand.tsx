import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classes from "./Brand.module.sass";
import cn from "classnames";
import axios from "axios";
import { IBrand } from "interfaces/brand.interface";
import Button from "components/UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectedBrand } from "redux/actions/selected.actions";

interface IBrandProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Brand = ({ className, ...props }:IBrandProps) => {
    const [brands, setBrands] = React.useState<IBrand[]>([]);
    const selected = useSelector((state:any) => state.selected.selectedBrand);
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios({
            url: "http://localhost:5000/api/brand",
            method: "GET"
        })
            .then((response) => {
                setBrands(response.data.brands);
            })
    }, []);

    const activeBrand = (name:string) => {
        dispatch(selectedBrand(name));
    }

    return (
        <div
            className={cn(classes.brand, className)}
            {...props}
        >
            <ul className={classes.list}>
                {brands.map((brand:IBrand) => {
                    return (
                        <li
                            onClick={() => activeBrand(brand.name)}
                            key={brand.id}
                            className={cn(classes.item, {
                                [classes.selectItem]: selected === brand.name
                            })}
                        >
                            <Button className={classes.button}>{brand.name}</Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Brand;