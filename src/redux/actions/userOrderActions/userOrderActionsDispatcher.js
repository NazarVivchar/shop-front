import axiosInstance from "../../../axiosInstance";
import {
    createUserOrderSuccessAction,
    getUserOrderAction,
    getUserOrderSuccessAction,
    updateUserOrderSuccessAction
} from "./userOrderActions";

export const getUserOrder = username => dispatch => {
    dispatch(getUserOrderAction());
    axiosInstance.get(`/user/${username}/order`)
        .then(response => response && dispatch(getUserOrderSuccessAction(response.data)))
        .catch();
};

export const createUserOrder = username => dispatch => {
  axiosInstance.post(`/user/${username}/order`, {
      date: new Date(),
  })
      .then(response => response && dispatch(createUserOrderSuccessAction(response.data)))
      .catch();
};

export const updateUserOrder = (username, order) => dispatch => {
    axiosInstance.put(`/user/${username}/order/${order.id}`, order)
        .then(response => response && dispatch(updateUserOrderSuccessAction(response.data)))
        .catch();
};
