import axiosInstance from "../../../axiosInstance";
import {
    deleteCategorySuccessAction,
    getCategoriesAction,
    getCategoriesSuccessAction,
    saveCategorySuccessAction,
    updateCategorySuccessAction
} from "./categoriesActions";

export const getCategories = () => dispatch => {
    dispatch(getCategoriesAction());
    return axiosInstance.get("/categories")
    .then(response => response && dispatch(getCategoriesSuccessAction(response.data)))
    .catch();
};

export const saveCategory = category => dispatch => {
    axiosInstance.post("/categories", category).then(response => response && dispatch(saveCategorySuccessAction(response.data)))
        .catch();
};

export const updateCategory = category => dispatch => {
    axiosInstance.put(`/categories/${category.id}`, category).then(response => response && dispatch(updateCategorySuccessAction(response.data)))
        .catch();
};

export const deleteCategory = id => dispatch => {
    axiosInstance.delete(`/categories/${id}`).then(response => response && dispatch(deleteCategorySuccessAction(id)))
        .catch();
};