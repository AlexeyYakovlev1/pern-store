import axios from "axios";

export async function getProducts(
    typeId?: number | null, brandId?: number | null, page?: number | null, limit: number = 5
) {
    const { data } = await axios.get("http://localhost:5000/api/device", {
        params: {
            typeId, brandId, page, limit
        }
    });

    return data;
}