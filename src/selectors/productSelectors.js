export function selectProductByCategory(state, categoryId) {
    return state.productsData.products.filter(product => product.category.id === categoryId || categoryId === 0);
}