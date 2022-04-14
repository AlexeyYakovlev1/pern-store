import axios from "axios";

export async function getBrands() {
    const { data } = await axios.get("http://localhost:5000/api/brand");

    return data;
}