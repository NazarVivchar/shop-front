import Grid from "@material-ui/core/Grid";
import ProductCard from "../Product/ProductCard";
import React from "react";

function productList(props) {
    return (
        props.products.map(product => (
            <ProductCard key={product.id} product={product}/>)
        )
    )
}

export default productList;