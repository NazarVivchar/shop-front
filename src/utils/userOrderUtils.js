import round from 'lodash.round';

export function getTotalOfOrderedProducts(orderedProducts) {
    const total = orderedProducts.reduce((sum, orderedProduct) => sum + orderedProduct.product.price * orderedProduct.amount, 0);
    return round(total, 2)
}
