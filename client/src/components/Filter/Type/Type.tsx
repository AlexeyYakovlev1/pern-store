import axios from "axios";
import { IType } from "interfaces/type.interface";
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useDispatch, useSelector } from "react-redux";
import classes from "./Type.module.sass";
import cn from "classnames";
import Button from "components/UI/button/Button";
import { selectedType } from "redux/actions/selected.actions";

interface IFilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Type = ({ className, ...props }:IFilterProps) => {
    const selected = useSelector((state:any) => state.selected.selectedType);
    const [types, setTypes] = React.useState<IType[]>([]);
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios({
            url: "http://localhost:5000/api/type",
            method: "GET"
        })
            .then((response) => {
                setTypes(response.data.types);
            })
    }, []);

    const activeType = (name:string) => {
        dispatch(selectedType(name));
    }

    return (
        <div
            className={cn(classes.type, className)}
            {...props}
        >
            <ul className={classes.list}>
                {types.map((type: IType) => {
                    return (
                        <li
                            onClick={() => activeType(type.name)}
                            key={type.id}
                            className={cn(classes.item, {
                                [classes.selectItem]: selected === type.name
                            })}
                        >
                            <Button className={classes.button}>{type.name}</Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Type;