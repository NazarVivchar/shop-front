import axiosInstance from "../../../axiosInstance";
import {
    deleteProductSuccessAction,
    getProductsAction,
    getProductsSuccessAction,
    saveProductSuccessAction,
    updateProductSuccessAction
} from "./productsActions";

export const getProducts = () => dispatch => {
    dispatch(getProductsAction());
    return axiosInstance.get("/products")
    .then(response => response && dispatch(getProductsSuccessAction(response.data)))
    .catch();
};

export const saveProduct = product => dispatch => {
    axiosInstance.post("/products", product).then(response => response && dispatch(saveProductSuccessAction(response.data)))
        .catch();
};

export const updateProduct = product => dispatch => {
    axiosInstance.put(`/products/${product.id}`, product).then(response => response && dispatch(updateProductSuccessAction(response.data)))
        .catch();
};

export const deleteProduct = id => dispatch => {
    axiosInstance.delete(`/products/${id}`).then(response => response && dispatch(deleteProductSuccessAction(id)))
        .catch();
};