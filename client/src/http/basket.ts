import axios from "axios";
import Cookies from "js-cookie";

export async function getBasket() {
    const { data } = await axios.get("http://localhost:5000/api/basket", {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });

    return data;
}