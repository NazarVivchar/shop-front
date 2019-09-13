export function selectProductByCategory(products, categoryId) {
    return products.filter(product => product.category.id === categoryId || categoryId === '0');
}