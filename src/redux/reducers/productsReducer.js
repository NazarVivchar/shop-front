import {productsActionTypes} from '../actions/productsActions/productsActions';

const initialState = {
    products: [],
    start: 1,
    limit: 10,
    total: 0,
    isLoading: true,
};
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productsActionTypes.CHANGE_PAGINATION_START:
            return {
                ...state,
                start: action.payload
            };

        case productsActionTypes.GET_PRODUCTS:
            return {
                ...state,
                isLoading: true,
            };

        case productsActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                isLoading: false,
            };

        case productsActionTypes.GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            };

        case  productsActionTypes.GET_PRODUCTS_AMOUNT_SUCCESS:
            return {
                ...state,
                total: action.payload,
                isLoading: false,
            };


        case productsActionTypes.SAVE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            };

        case productsActionTypes.UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [
                    ...state.products.map(product => product.id === action.payload.id ? action.payload : product),
                ]
            };

        case productsActionTypes.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [
                    ...state.products.filter(product => product.id !== action.payload),
                ]
            };

        default:
            return state;
    }
}
