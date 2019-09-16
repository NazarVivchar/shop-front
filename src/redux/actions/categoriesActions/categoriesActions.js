
export const categoriesActionTypes = {
  GET_CATEGORIES: '[CATEGORIES] Trying to get categories',
  GET_CATEGORIES_SUCCESS: '[CATEGORIES] Successfully got all categories',
  SAVE_CATEGORY_SUCCESS: '[CATEGORIES] Successfully saved new category',
  UPDATE_CATEGORY_SUCCESS: '[CATEGORIES] Successfully update the category',
  DELETE_CATEGORY_SUCCESS: '[CATEGORIES] Successfully deleted the category',
};

export const getCategoriesAction = () => ({
  type: categoriesActionTypes.GET_CATEGORIES,
});

export const getCategoriesSuccessAction = categories => ({
  type: categoriesActionTypes.GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const saveCategorySuccessAction = product => ({
  type: categoriesActionTypes.SAVE_CATEGORY_SUCCESS,
  payload: product,
});

export const updateCategorySuccessAction = product => ({
  type: categoriesActionTypes.UPDATE_CATEGORY_SUCCESS,
  payload: product,
});

export const deleteCategorySuccessAction = id => ({
  type: categoriesActionTypes.DELETE_CATEGORY_SUCCESS,
  payload: id,
});
