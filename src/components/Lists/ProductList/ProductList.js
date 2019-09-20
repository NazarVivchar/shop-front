import ProductCard from "../../Product/ProductCardContainer";
import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";

class productList extends Component {
    areProductsAvailable() {
        return this.props.products && this.props.products.length;
    }

    renderProducts() {
        return (
            <Grid
                container
                alignItems="center"
                justify="space-evenly"
            >
                {this.props.products.map(product => (
                    <Grid item key={product.id}>
                        <ProductCard showAdminControls = {this.props.isAdminList} product={product}/>
                    </Grid>
                ))}
            </Grid>
        )
    }

    renderNoAvailableProducts() {
        return (
            <Grid
                container
                alignItems="center"
                justify="center">
                <Typography
                    variant="h2"
                    style={{marginTop: this.props.theme.spacing(30)}}>
                    Товари не знайдено
                </Typography>
            </Grid>
        )
    }

    render() {
        return (
            this.areProductsAvailable()
                ? this.renderProducts()
                : this.renderNoAvailableProducts()
        )
    }
}

export default withTheme(productList);