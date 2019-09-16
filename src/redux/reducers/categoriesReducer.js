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

    case categoriesActionTypes.SAVE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [
          ...state.categories,
          action.payload
        ]
      };

    case categoriesActionTypes.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [
          ...state.categories.map(category => category.id === action.payload.id ? action.payload : category),
        ]
      };

    case categoriesActionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [
          ...state.categories.filter(category => category.id !== action.payload),
        ]
      };

    default:
      return state;
  }
}
