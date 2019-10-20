import axiosInstance from "../../../axiosInstance";
import {
    deleteProductSuccessAction,
    getProductsAction, getProductsAmountSuccess,
    getProductsSuccessAction,
    saveProductSuccessAction,
    updateProductSuccessAction
} from "./productsActions";

export const getProducts = (categoryFilter=0) => (dispatch, getState) => {
    dispatch(getProductsAction());
    const productData = getState().productsData;
    return axiosInstance.get(`/products?start=${productData.start}&limit=${productData.limit}&categoryId=${categoryFilter}`)
    .then(response => {
        response && dispatch(getProductsSuccessAction(response.data))})
    .catch();
};

export const getProductsAmount = (categoryFilter=0) => dispatch => {
    return axiosInstance.get(`/products/amount?categoryId=${categoryFilter}`)
        .then(response => {
            response && dispatch(getProductsAmountSuccess(response.data))})
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