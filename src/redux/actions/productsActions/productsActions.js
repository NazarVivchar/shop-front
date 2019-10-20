export const productsActionTypes = {
    GET_PRODUCTS: '[PRODUCTS] Trying to get products',
    GET_PRODUCTS_SUCCESS: '[PRODUCTS] Successfully got all products',
    GET_PRODUCT_BY_ID_SUCCESS: '[PRODUCTS] Successfully got product by id',
    GET_PRODUCTS_AMOUNT_SUCCESS: '[PRODUCTS] Successfully got amount of products',
    SAVE_PRODUCT_SUCCESS: '[PRODUCTS] Successfully saved new product',
    UPDATE_PRODUCT_SUCCESS: '[PRODUCTS] Successfully update the product',
    DELETE_PRODUCT_SUCCESS: '[PRODUCTS] Successfully deleted the product',
    CHANGE_PAGINATION_START: '[PRODUCT] Change pagination first page'
};

export const changePaginationStart = start => ({
    type: productsActionTypes.CHANGE_PAGINATION_START,
    payload: start
});

export const getProductsAction = () => ({
    type: productsActionTypes.GET_PRODUCTS,
});

export const getProductsAmountSuccess = amount => ({
    type: productsActionTypes.GET_PRODUCTS_AMOUNT_SUCCESS,
    payload: amount
});

export const getProductsSuccessAction = response => ({
        type: productsActionTypes.GET_PRODUCTS_SUCCESS,
        payload: response,
    });

export const getProductByIdSuccess = response => ({
    type: productsActionTypes.GET_PRODUCT_BY_ID_SUCCESS,
    payload: response
});

export const saveProductSuccessAction = product => ({
    type: productsActionTypes.SAVE_PRODUCT_SUCCESS,
    payload: product,
});

export const updateProductSuccessAction = product => ({
    type: productsActionTypes.UPDATE_PRODUCT_SUCCESS,
    payload: product,
});

export const deleteProductSuccessAction = id => ({
    type: productsActionTypes.DELETE_PRODUCT_SUCCESS,
    payload: id,
});
