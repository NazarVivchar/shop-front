export const categoriesActionTypes = {
  GET_CATEGORIES: '[CATEGORIES] Trying to get categories',
  GET_CATEGORIES_SUCCESS: '[CATEGORIES] Successfully got all categories',
};

export const getCategories = () => ({
  type: categoriesActionTypes.GET_CATEGORIES,
});

export const getCategoriesSuccess = categories => ({
  type: categoriesActionTypes.GET_CATEGORIES_SUCCESS,
  payload: categories,
});
