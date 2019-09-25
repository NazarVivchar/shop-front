import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import withTheme from "@material-ui/core/styles/withTheme";
import OrderedProductCard from "../../OrderedProduct/OrderedProductCard";

class OrderedProductsList extends Component {
    areProductsAvailable() {
        return this.props.orderedProducts && this.props.orderedProducts.length;
    }

    renderProducts() {
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
            >
                {this.props.orderedProducts.map(orderedProduct => (
                            <OrderedProductCard key={orderedProduct.id} product={orderedProduct.product} amount={orderedProduct.amount}/>
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
                    Замовлення порожнє
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

export default withTheme(OrderedProductsList);