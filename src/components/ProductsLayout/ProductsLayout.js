import Grid from "@material-ui/core/Grid";
import React, {Component} from "react";
import ProductCard from "../Product/ProductCard";
import theme from "../../theme";

class ProductsLayout extends Component {
    componentDidMount() {
        this.props.loadData();
    }

    areProductsAvailable() {
        return this.props.products && this.props.products.length;
    }

    renderProducts() {
        return (
            this.props.products.map(product => (
                <Grid
                    key={product.id}
                    item>
                    <ProductCard product={product}/>
                </Grid>
            ))
        )
    }

    renderUnavailableProducts() {
        return <h1>No products are available</h1>
    }

    render() {
        return (
            <Grid
                container
                justify="space-evenly"
                style={{padding: ` 0 ${theme.spacing(2)}px`}}>
                {this.areProductsAvailable()
                    ? this.renderProducts()
                    : this.renderUnavailableProducts()}
            </Grid>
        )
    }
}

export default ProductsLayout;