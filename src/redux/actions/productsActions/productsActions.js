export const productsActionTypes = {
  GET_PRODUCTS: '[PRODUCTS] Trying to get products',
  GET_PRODUCTS_SUCCESS: '[PRODUCTS] Successfully got all products',
};

export const getCategories = () => ({
  type: productsActionTypes.GET_PRODUCTS,
});

export const getCategoriesSuccess = products => ({
  type: productsActionTypes.GET_PRODUCTS_SUCCESS,
  payload: products,
});
