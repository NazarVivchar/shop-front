export function selectNumberOfProductsInCategory(state, category) {
    return  state.productsData.products.filter(product=>product.category.id===category.id).length;
}