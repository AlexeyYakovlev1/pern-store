import axios from "axios";

export async function getTypes() {
    const { data } = await axios.get("http://localhost:5000/api/type");

    return data;
}