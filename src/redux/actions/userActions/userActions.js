export const userActionTypes = {
    REGISTER_USER_SUCCESS: '[USER] Registering user',
    LOG_IN_USER_SUCCESS: '[USER] Logging user in',
    LOG_USER_OUT_SUCCESS: '[USER] Logging user out',
    IS_USER_LOGGED: '[USER] Checking if user is logged',
};

export const logInUserSuccessAction = username => ({
    type: userActionTypes.LOG_IN_USER_SUCCESS,
    payload: username
});

export const registerUserSuccessAction = user => ({
    type: userActionTypes.REGISTER_USER_SUCCESS,
});

export const checkIfUserLoggedAction = () => ({
    type: userActionTypes.IS_USER_LOGGED,
});

export const logOutUserSuccessAction = user => ({
    type: userActionTypes.LOG_USER_OUT_SUCCESS,
});