import ProductCard from "../../Product/ProductCard";
import React from "react";
import Grid from "@material-ui/core/Grid";

function productList(props) {
    return (
        <Grid
            container
            alignItems="stretch"
            justify="flex-start">
            {props.products.map(product => (
                    <Grid item key={product.id}>
                        <ProductCard product={product}/>
                    </Grid>
                )
            )}
        </Grid>
    )
}

export default productList;