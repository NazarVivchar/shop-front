import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import withTheme from "@material-ui/core/styles/withTheme";
import OrderedProductCard from "../../OrderedProduct/OrderedProductCardContainer";
import theme from "../../../theme";
import {getTotalOfOrderedProducts} from "../../../utils/userOrderUtils";

class OrderedProductsList extends Component {
    areProductsAvailable() {
        return this.props.orderedProducts && this.props.orderedProducts.length;
    }

    renderProducts() {
        const {orderedProducts} = this.props;
        return (
            <>
                {orderedProducts.map(orderedProduct => (
                <OrderedProductCard key={orderedProduct.id} product={orderedProduct.product}
                                    amount={orderedProduct.amount}/>
                ))}
                <Typography
                    variant="h5"
                    style={{marginTop: theme.spacing(4)}}>
                    Загалом: {`  $ ${getTotalOfOrderedProducts(orderedProducts)}`}
                </Typography>
            </>
        )
    }

    renderNoAvailableProducts() {
        return (
            <Typography
                variant="h3"
                align="center"
                style={{marginTop: theme.spacing(35)}}>
                Замовлення порожнє
            </Typography>
        )
    }

    render() {
        return (
            <Grid
                container
                alignItems="flex-start"
                justify="center">
                {
                    this.areProductsAvailable()
                        ? this.renderProducts()
                        : this.renderNoAvailableProducts()
                }
            </Grid>
        )
    }
}

export default withTheme(OrderedProductsList);