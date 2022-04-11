export interface IProduct {
    img: string;
    id: number;
    name: string;
    price: number;
    brandId: number;
    typeId: number;
    rating: number;
    info: IInfoProduct[];
}

export interface IInfoProduct {
    id: number;
    title: string;
    description: string;
    deviceId: number;
}