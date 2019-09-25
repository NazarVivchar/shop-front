export const userOrderActionTypes = {
    GET_USER_ORDER: '[USER_ORDER] Trying to get user order',
    GET_USER_ORDER_SUCCESS: '[USER_ORDER] Successfully got user order',
    CREATE_USER_ORDER: '[USER_ORDER] Successfully created new user order',
    UPDATE_USER_ORDER: '[USER_ORDER] Successfully created new user order',
};

export const getUserOrderAction = () => ({
    type: userOrderActionTypes.GET_USER_ORDER,
});

export const getUserOrderSuccessAction = userOrder => ({
    type: userOrderActionTypes.GET_USER_ORDER_SUCCESS,
    payload: userOrder,
});

export const createUserOrderSuccessAction = userOrder => ({
    type: userOrderActionTypes.CREATE_USER_ORDER,
    payload: userOrder,
});

export const updateUserOrderSuccessAction = userOrder => ({
    type: userOrderActionTypes.UPDATE_USER_ORDER,
    payload: userOrder,
});