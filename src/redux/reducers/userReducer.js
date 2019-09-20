import {userActionTypes} from "../actions/userActions/userActions";

const initialState = {
    isLogged: false,
};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userActionTypes.LOG_IN_USER_SUCCESS:
            return {
                isLogged: true
            };
        case userActionTypes.LOG_USER_OUT_SUCCESS:
            return {
                isLogged: false
            };
        case userActionTypes.IS_USER_LOGGED:
            return {
            isLogged: !!localStorage.getItem("Token")
            };
        default:
            return state;
    }
}
