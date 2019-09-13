import axiosInstance from "../../../axiosInstance";
import {getCategoriesSuccessAction} from "./categoriesActions";

export const getCategories = () => dispatch => axiosInstance.get("/categories")
    .then(response => response && dispatch(getCategoriesSuccessAction(response.data)))
    .catch();