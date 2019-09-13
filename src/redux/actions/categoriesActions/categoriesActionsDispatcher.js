import axiosInstance from "../../../axiosInstance";
import {getCategoriesAction, getCategoriesSuccessAction} from "./categoriesActions";

export const getCategories = () => dispatch => {
    dispatch(getCategoriesAction());
    return axiosInstance.get("/categories")
    .then(response => response && dispatch(getCategoriesSuccessAction(response.data)))
    .catch();
}