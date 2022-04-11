import axios from "axios";
import { IAlert } from "interfaces/alert.interface";
import { IBrand } from "interfaces/brand.interface";
import { IProduct } from "interfaces/product.interface";
import { IType } from "interfaces/type.interface";
import Cookies from "js-cookie";

// добавление типа продукта
export const addTypeHandler = (event: any, infoType: IType, setAlert: (value: IAlert | ((alert: IAlert) => IAlert)) => void) => {
    event.preventDefault();

    axios({
        method: "POST",
        url: "http://localhost:5000/api/type/create",
        data: { name: infoType.name },
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get("token")}`
        }
    })
        .then((response) => {
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

// добавление бренда продукта
export const addBrandHandler = (event: any, infoBrand: IBrand, setAlert: (value: IAlert | ((alert: IAlert) => IAlert)) => void) => {
    event.preventDefault();

    axios({
        method: "POST",
        url: "http://localhost:5000/api/brand/create",
        data: { name: infoBrand.name },
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get("token")}`
        }
    })
        .then((response) => {
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

// добавление фото для продукта
export const addPhotoProduct = (
    event: any,
    setImg: (value: any | ((img: any) => any)) => void
) => {
    setImg(event.target.files[0]);
}

// создание блока для описания продукта
export const createDescriptionBlock = (
    setDescription: (value: any | ((description: any) => any)) => void,
    description: any
) => {
    setDescription([...description, { title: "", description: "", id: Date.now(), deviceId: 1 }]);
}

// изменение описания к товару
export const changeDescription = (
    key: string, value: string, id: number,
    setDescription: (value: any | ((description: any) => any)) => void,
    description: any
) => {
    setDescription(description.map((item: any) => item.id === id ? { ...item, [key]: value } : item));
}

// удаление блока для описания продукта
export const deleteDescriptionBlock = (
    currentId: number,
    setDescription: (value: any | ((description: any) => any)) => void,
    description: any
) => {
    setDescription(description.filter((el: any) => el.id !== currentId));
}

// добавление продукта
export const addDeviceHandler = (
    event: any, infoProduct: IProduct, description: any,
    setAlert: (value: IAlert | ((alert: IAlert) => IAlert)) => void,
    img: any
) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", infoProduct.name);
    formData.append("price", infoProduct.price.toString());
    formData.append("img", img);
    formData.append("brandId", infoProduct.brandId.toString());
    formData.append("typeId", infoProduct.typeId.toString());
    formData.append("info", JSON.stringify(description));

    axios({
        method: "POST",
        url: "http://localhost:5000/api/device/create",
        data: formData,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get("token")}`
        }
    })
        .then((response) => {
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