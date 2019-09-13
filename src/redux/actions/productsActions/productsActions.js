export const productsActionTypes = {
  GET_PRODUCTS: '[PRODUCTS] Trying to get products',
  GET_PRODUCTS_SUCCESS: '[PRODUCTS] Successfully got all products',
};

export const getProductsAction = () => ({
  type: productsActionTypes.GET_PRODUCTS,
});

export const getProductsSuccessAction = products => ({
  type: productsActionTypes.GET_PRODUCTS_SUCCESS,
  payload: products,
});
