export const userOrderActionTypes = {
    GET_USER_ORDER: '[USER_ORDER] Trying to get user order',
    GET_USER_ORDER_SUCCESS: '[USER_ORDER] Successfully got user order',
};

export const getUserOrderAction = () => ({
    type: userOrderActionTypes.GET_USER_ORDER,
});

export const getUserOrderSuccessAction = userOrder => ({
    type: userOrderActionTypes.GET_USER_ORDER_SUCCESS,
    payload: userOrder,
});