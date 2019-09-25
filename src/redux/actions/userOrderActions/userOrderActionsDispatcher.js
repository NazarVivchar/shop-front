import axiosInstance from "../../../axiosInstance";
import {getUserOrderAction, getUserOrderSuccessAction} from "./userOrderActions";

export const getUserOrder = username => dispatch => {
    dispatch(getUserOrderAction());
    axiosInstance.get(`/user/${username}/order`)
        .then(response => response && dispatch(getUserOrderSuccessAction(response.data)))
        .catch();
};
