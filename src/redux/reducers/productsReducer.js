import {productsActionTypes} from '../actions/productsActions/productsActions';

const initialState = {
    products: [],
    isLoading: true,
};
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
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

        default:
            return state;
    }
}
