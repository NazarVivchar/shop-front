export const categoriesActionTypes = {
  GET_CATEGORIES: '[CATEGORIES] Trying to get categories',
  GET_CATEGORIES_SUCCESS: '[CATEGORIES] Successfully got all categories',
};

export const getCategoriesAction = () => ({
  type: categoriesActionTypes.GET_CATEGORIES,
});

export const getCategoriesSuccessAction = categories => ({
  type: categoriesActionTypes.GET_CATEGORIES_SUCCESS,
  payload: categories,
});
