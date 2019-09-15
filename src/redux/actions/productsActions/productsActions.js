export const productsActionTypes = {
  GET_PRODUCTS: '[PRODUCTS] Trying to get products',
  GET_PRODUCTS_SUCCESS: '[PRODUCTS] Successfully got all products',
  SAVE_PRODUCT_SUCCESS: '[PRODUCTS] Successfully saved new product',
  UPDATE_PRODUCT_SUCCESS: '[PRODUCTS] Successfully update the product',
};

export const getProductsAction = () => ({
  type: productsActionTypes.GET_PRODUCTS,
});

export const getProductsSuccessAction = products => ({
  type: productsActionTypes.GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const saveProductSuccessAction = product => ({
  type: productsActionTypes.SAVE_PRODUCT_SUCCESS,
  payload: product,
});

export const updateProductSuccessAction = product => ({
  type: productsActionTypes.UPDATE_PRODUCT_SUCCESS,
  payload: product,
});
