import { categoriesActionTypes } from '../actions/categoriesActions/categoriesActions';

const initialState = {
  categories: [],
  isLoading: true,
};
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case categoriesActionTypes.GET_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };

    case categoriesActionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
