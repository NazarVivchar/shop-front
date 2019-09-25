import axiosInstance from "../../../axiosInstance";
import {
    createUserOrderSuccessAction, deleteUserOrderSuccessAction,
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

export const updateUserOrder = (username, order) => dispatch => {
    axiosInstance.put(`/user/${username}/order/${order.id}`, order)
        .then(response => response && dispatch(updateUserOrderSuccessAction(response.data)))
        .catch();
};

export const deleteUserOrder = (username, order) => dispatch => {
    axiosInstance.delete(`/user/${username}/order/${order.id}`)
        .then(response => response && dispatch(deleteUserOrderSuccessAction(order.id)))
        .catch();
};

export const addToNewUserOrder = (username, product) => dispatch => {
    return axiosInstance.post(`/user/${username}/order`, {
        date: new Date().toLocaleDateString("uk-UA"),
        status: "inProgress"
    })
        .then(response => {
            if (response) {
                dispatch(createUserOrderSuccessAction(response.data));
                dispatch(updateUserOrder(username,
                    {
                        ...response.data,
                        orderedProducts: [
                            ...(response.data.orderedProducts || []),
                            {
                                amount: 1,
                                product: {
                                    id: product.id
                                },
                            }
                        ]
                    }
                ))
            }
        })
};