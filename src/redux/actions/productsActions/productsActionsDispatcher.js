import axiosInstance from "../../../axiosInstance";
import {getProductsAction, getProductsSuccessAction} from "./productsActions";

export const getProducts = () => dispatch => {
    dispatch(getProductsAction());
    return axiosInstance.get("/products")
    .then(response => response && dispatch(getProductsSuccessAction(response.data)))
    .catch();
};