import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classes from "./Brand.module.sass";
import cn from "classnames";
import { IBrand } from "interfaces/brand.interface";
import Button from "components/UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectedBrand } from "redux/actions/selected.actions";
import { getBrands } from "http/brands";

interface IBrandProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Brand = ({ className, ...props }:IBrandProps) => {
    const [brands, setBrands] = React.useState<IBrand[]>([]);
    const selected = useSelector((state:any) => state.selected.selectedBrand);
    const dispatch = useDispatch();

    React.useEffect(() => {
        getBrands().then((response) => setBrands(response.brands));
    }, []);

    const activeBrand = (id:number) => {
        dispatch(selectedBrand(id));
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
                            onClick={() => activeBrand(brand.id)}
                            key={brand.id}
                            className={cn(classes.item, {
                                [classes.selectItem]: selected === brand.id
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