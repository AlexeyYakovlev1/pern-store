import MainLayout from "components/layouts/MainLayout/MainLayout"
import React from 'react'
import classes from "./Admin.module.sass";
import cn from "classnames";
import Input from "components/UI/input/Input";
import { IType } from "interfaces/type.interface";
import Button from "components/UI/button/Button";
import { IBrand } from "interfaces/brand.interface";
import { IInfoProduct, IProduct } from "interfaces/product.interface";
import Form from "./Form/Form";
import { AlertContext } from "context/AlertContext";
import {
    addBrandHandler, addDeviceHandler, addPhotoProduct,
    addTypeHandler, changeDescription, createDescriptionBlock,
    deleteDescriptionBlock
} from "./actions";

const Admin = () => {
    const [infoType, setInfoType] = React.useState<IType>({ name: "", id: -1 });
    const [img, setImg] = React.useState("");
    const [description, setDescription] = React.useState<any>([]);
    const [infoBrand, setInfoBrand] = React.useState<IBrand>({ name: "", id: -1 });
    const [infoProduct, setInfoProduct] = React.useState<IProduct>({
        name: "Xiaomi Redmi 9A",
        price: 9990,
        id: 1,
        img: "/30062792bb.jpg",
        brandId: 6,
        typeId: 1,
        rating: 3,
        info: []
    });
    const { setAlert } = React.useContext(AlertContext);

    return (
        <MainLayout>
            <div className={cn(classes.admin, "container")}>
                <Form className={cn(classes.type, classes.formBlock)}>
                    <h3 className={classes.title}>Добавить тип</h3>
                    <form className={classes.form} onSubmit={(event) => addTypeHandler(event, infoType, setAlert)}>
                        <Input
                            type="text"
                            name="name" 
                            placeholder="Название"
                            value={infoType.name}
                            onChange={event => setInfoType({ ...infoType, name: event.target.value })}
                        />
                        <Button>Готово</Button>
                    </form>
                </Form>
                <Form className={cn(classes.brand, classes.formBlock)}>
                    <h3 className={classes.title}>Добавить бренд</h3>
                    <form className={classes.form} onSubmit={(event) => addBrandHandler(event, infoBrand, setAlert)}>
                        <Input
                            type="text"
                            name="name" 
                            placeholder="Название"
                            value={infoBrand.name}
                            onChange={event => setInfoBrand({ ...infoBrand, name: event.target.value })}
                        />
                        <Button>Готово</Button>
                    </form>
                </Form>
                <Form className={cn(classes.device, classes.formBlock)}>
                    <h3 className={classes.title}>Добавить продукт</h3>
                    <form
                        className={classes.form}
                        onSubmit={(event) => addDeviceHandler(event, infoProduct, description, setAlert, img)}
                    >
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
                            onChange={(event) => addPhotoProduct(event, setImg)}
                        />
                        <div className={classes.addDescription}>
                            {description.map((item:IInfoProduct) => {
                                return (
                                    <div className={classes.addDescriptionItem} key={item.id}>
                                        <Input
                                            name="title"
                                            placeholder="Название"
                                            value={item.title}
                                            onChange={event => changeDescription("title", event.target.value, item.id, setDescription, description)}
                                        />
                                        <Input
                                            name="description"
                                            placeholder="Описание"
                                            value={item.description}
                                            onChange={event => changeDescription("description", event.target.value, item.id, setDescription, description)}
                                        />
                                        <span
                                            onClick={() => deleteDescriptionBlock(item.id, setDescription, description)}
                                            className={classes.optionButton}
                                        >
                                            Удалить
                                        </span>
                                    </div>
                                )
                            })}    
                        </div>
                        <span
                            className={classes.optionButton}
                            onClick={() => createDescriptionBlock(setDescription, description)}
                        >
                            Добавить описание продукта
                        </span>
                        <Button>Готово</Button>
                    </form>
                </Form>
            </div>
        </MainLayout>
    )
}

export default Admin;