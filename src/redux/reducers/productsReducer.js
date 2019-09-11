import { productsActionTypes } from '../actions/productsActions/productsActions';

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

    default:
      return state;
  }
}
