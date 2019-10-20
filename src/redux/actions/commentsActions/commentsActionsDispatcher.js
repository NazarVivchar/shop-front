import axiosInstance from "../../../axiosInstance";
import {getCommentsAction, getCommentsSuccessAction, saveCommentSuccessAction} from "./commentsActions";

export const getComments = productId => dispatch => {
    dispatch(getCommentsAction());
    return axiosInstance.get(`/product/${productId}/comments`)
        .then(response => response && dispatch(getCommentsSuccessAction(response.data)))
        .catch();
};

export const saveComment = comment => dispatch => {
    axiosInstance.post("/comments", comment).then(response => response && dispatch(saveCommentSuccessAction(response.data)))
        .catch();
};
