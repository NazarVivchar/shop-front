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

        case userOrderActionTypes.CREATE_USER_ORDER:
            return {
                ...state,
                userOrder: action.payload,
            };

        case userOrderActionTypes.UPDATE_USER_ORDER:
            return {
                ...state,
                userOrder: action.payload,
            };

        default:
            return state;
    }
}