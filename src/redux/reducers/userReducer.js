import {userActionTypes} from "../actions/userActions/userActions";
import {getUsernameFromToken} from "../../utils/userUtils";

const initialState = {
    username: getUsernameFromToken(localStorage.getItem("Token")),
    isLogged: false,
};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userActionTypes.LOG_IN_USER_SUCCESS:
            return {
                username: action.payload,
                isLogged: true
            };
        case userActionTypes.LOG_USER_OUT_SUCCESS:
            return {
                username: "",
                isLogged: false
            };
        case userActionTypes.IS_USER_LOGGED:
            return {
                ...state,
                isLogged: !!localStorage.getItem("Token")
            };
        default:
            return state;
    }
}
