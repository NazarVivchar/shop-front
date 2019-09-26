import axiosInstance from "../../../axiosInstance";
import {
    logInUserSuccessAction,
    logOutUserSuccessAction,
    registerUserSuccessAction
} from "./userActions";
import {getUsernameFromToken} from "../../../utils/userUtils";

export const logInUser = user => dispatch => {
    axiosInstance.post("/login", user).then(response => {
        if (response) {
            dispatch(logInUserSuccessAction(getUsernameFromToken(response.headers["authorization"])));
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
