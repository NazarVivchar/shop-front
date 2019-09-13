import axiosInstance from "../../../axiosInstance";
import {getProductsSuccessAction} from "./productsActions";

export const getProducts = () => dispatch => axiosInstance.get("/products")
    .then(response => response && dispatch(getProductsSuccessAction(response.data)))
    .catch();