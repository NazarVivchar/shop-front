import {userOrderActionTypes} from "../actions/userOrderActions/userOrderActions";

const initialState = {
    userOrder: null,
    isLoading: true,
};

export default function userOrderReducer(state = initialState, action) {
    switch (action.type) {
        case userOrderActionTypes.GET_USER_ORDER:
            return {
                ...state,
                isLoading: true,
            };

        case userOrderActionTypes.GET_USER_ORDER_SUCCESS:
            return {
                ...state,
                userOrder: action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
}