import axios from "axios";
import Cookies from "js-cookie";

export async function auth() {
    const { data } = await axios.get("http://localhost:5000/api/user/auth", {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })

    return data;
}