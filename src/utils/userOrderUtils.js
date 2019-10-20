import round from 'lodash.round';

export function getTotalOfOrderedProducts(orderedProducts) {
    const total = orderedProducts
        .reduce(
            (sum, orderedProduct) => sum + (orderedProduct.product.price*(1-(orderedProduct.product.discount+orderedProduct.product.category.discount?orderedProduct.product.category.discount.percentage:0)/100)) * orderedProduct.amount, 0);
    return round(total, 2)
}
