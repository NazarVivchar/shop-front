export function selectProductsByCategory(state, categoryId) {
    return state.productsData.products
        .filter(product => product.category.id === categoryId || categoryId === 0);
}

export function orderProductsByPrice(products, sortOrder) {
    return products.sort((p1,p2)=> sortOrder * (p1.price - p2.price));
}

export function orderProductsByName(products, sortOrder) {
    return products.sort((p1,p2)=> sortOrder * p1.name.localeCompare(p2.name));
}