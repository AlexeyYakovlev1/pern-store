import React from "react";
import { IAlert } from "../interfaces/alert.interface";

export const AlertContext = React.createContext({
    alert: { message: "", type: "success" }, setAlert: (value: IAlert | ((alert: IAlert) => IAlert)) => { }
});