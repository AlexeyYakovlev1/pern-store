import MainLayout from "components/layouts/MainLayout/MainLayout"
import React from 'react'
import classes from "./Admin.module.sass";
import cn from "classnames";
import Input from "components/UI/input/Input";
import { IType } from "interfaces/type.interface";
import Button from "components/UI/button/Button";
import { IBrand } from "interfaces/brand.interface";
import { IProduct } from "interfaces/product.interface";

const Admin = () => {
    const [infoType, setInfoType] = React.useState<IType>({ name: "", id: -1 });
    const [infoBrand, setInfoBrand] = React.useState<IBrand>({ name: "", id: -1 });
    const [infoProduct, setInfoProduct] = React.useState<IProduct>({
        name: "Xiaomi Redmi 9A",
        price: 9990,
        id: 1,
        img: "/30062792bb.jpg",
        brandId: 6,
        typeId: 1,
        rating: 3
    });

    return (
        <MainLayout>
            <div className={cn(classes.admin, "container")}>
                <div className={classes.type}>
                    <h3 className={classes.title}>Добавить тип</h3>
                    <form className={classes.form}>
                        <Input
                            type="text"
                            name="name" 
                            placeholder="Название"
                            value={infoType.name}
                            onChange={event => setInfoType({ ...infoType, name: event.target.value })}
                        />
                        <Button>Готово</Button>
                    </form>
                </div>
                <div className={classes.brand}>
                    <h3 className={classes.title}>Добавить бренд</h3>
                    <form className={classes.form}>
                        <Input
                            type="text"
                            name="name" 
                            placeholder="Название"
                            value={infoBrand.name}
                            onChange={event => setInfoBrand({ ...infoBrand, name: event.target.value })}
                        />
                        <Button>Готово</Button>
                    </form>
                </div>
                <div className={classes.device}>
                    <h3 className={classes.title}>Добавить продукт</h3>
                    <form className={classes.form}>
                        <Input
                            type="text"
                            name="name" 
                            placeholder="Название"
                            value={infoProduct.name}
                            onChange={event => setInfoProduct({ ...infoProduct, name: event.target.value })}
                        />
                        <Input
                            type="number"
                            name="price" 
                            placeholder="Цена"
                            value={infoProduct.price}
                            onChange={event => setInfoProduct({ ...infoProduct, price: Number(event.target.value) })}
                        />
                        <Input
                            type="number"
                            name="brandId" 
                            placeholder="Идентификатор бренда"
                            value={infoProduct.brandId}
                            onChange={event => setInfoProduct({ ...infoProduct, brandId: Number(event.target.value) })}
                        />
                        <Input
                            type="number"
                            name="typeId" 
                            placeholder="Идентификатор типа"
                            value={infoProduct.typeId}
                            onChange={event => setInfoProduct({ ...infoProduct, typeId: Number(event.target.value) })}
                        />
                        <Input
                            type="file"
                            name="img" 
                            placeholder="Фото"
                        />
                        <Button>Готово</Button>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}

export default Admin