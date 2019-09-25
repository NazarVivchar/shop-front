import {userOrderActionTypes} from "../actions/userOrderActions/userOrderActions";

const initialState = {
    userOrder: [],
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
                userOrder: [
                    ...(state.userOrder||[]),
                    action.payload
                ],
            };

        case userOrderActionTypes.UPDATE_USER_ORDER:
            return {
                ...state,
                userOrder: [
                    ...state.userOrder.map(userOrder => userOrder.id===action.payload.id?action.payload: userOrder)
                ],
            };

        case userOrderActionTypes.DELETE_USER_ORDER:
            return {
                ...state,
                userOrder: [
                    ...state.userOrder.filter(userOrder => userOrder.id!==action.payload)
                ],
            };

        default:
            return state;
    }
}