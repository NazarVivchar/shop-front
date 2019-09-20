import axiosInstance from "../../../axiosInstance";
import {
    checkIfUserLoggedAction,
    logInUserSuccessAction,
    logOutUserSuccessAction,
    registerUserSuccessAction
} from "./userActions";

export const logInUser = user => dispatch => {
    axiosInstance.post("/login", user).then(response => {
        if (response) {
            dispatch(logInUserSuccessAction(response.data));
            localStorage.setItem("Token", response.headers["authorization"]);
        }
    })
        .catch();
};

export const logOutUser = () => dispatch => {
    localStorage.removeItem("Token");
    dispatch(logOutUserSuccessAction());
};

export const registerUser = user => dispatch => {
    axiosInstance.post("/user", user)
        .then(response => response && dispatch(registerUserSuccessAction(user)))
        .catch();
};
