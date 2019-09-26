import {Grid} from "@material-ui/core";
import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import "./OrderCard.scss";
import withTheme from "@material-ui/core/styles/withTheme";
import Divider from "@material-ui/core/Divider";
import {orderStatuses} from "../../../utils/orderStatuses";
import HistoryOrderedProductCard from "../HistoryOrderedProductCard/HistoryOrderedProductCard";
import Button from "@material-ui/core/Button";
import {getTotalOfOrderedProducts} from "../../../utils/userOrderUtils";

class OrderCard extends Component {
    cancelOrder = () => {
        this.props.cancelUserOrder(this.props.username)
    };

    renderCancelButton() {
        const {theme} = this.props;

        return (
            <>
                <Divider/>
                <Grid
                    container
                    justify="flex-end"
                    className="cancel-button-container "
                    style={{padding: theme.spacing(1)}}>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={this.cancelOrder}
                        style={{color: "red"}}>
                        Скасувати замовлення
                    </Button>
                </Grid>
            </>
        )


    }

    render() {
        const {order, theme} = this.props;

        return (
            <Grid
                container
                direction="column"
                className="order-container"
                style={{
                    marginTop: theme.spacing(2),
                    marginBottom: theme.spacing(2),
                }}>
                <Grid
                    item
                    style={{
                        minHeight: "50px",
                        padding: theme.spacing(2)
                    }}>
                    <Grid
                        container
                        alignContent="center"
                        justify="space-between">
                        <Typography>
                            Замовлення №{order.id}
                        </Typography>
                        <Typography
                            style={{color: orderStatuses[order.status].color}}>
                            {orderStatuses[order.status].text}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid
                    container
                      style={{
                          paddingLeft: theme.spacing(4),
                          paddingRight: theme.spacing(4),
                          marginBottom: theme.spacing(2)
                      }}>
                    {order.orderedProducts.map(orderedProduct =>
                        <HistoryOrderedProductCard key={orderedProduct.id} product={orderedProduct.product}/>)
                    }
                </Grid>
                <Grid
                    container
                    justify="space-between"
                    style={{
                        paddingLeft: theme.spacing(4),
                        paddingRight: theme.spacing(4),
                        marginBottom: theme.spacing(1)
                    }}>
                    <Grid item xs={10}>
                    <Typography
                        variant="h6"
                        align="left">
                        Загалом:
                    </Typography>
                    </Grid>
                        <Grid item xs={2}>
                        <Typography
                        variant="h6"
                        align="right">
                        {`  $ ${getTotalOfOrderedProducts(order.orderedProducts)}`}
                    </Typography>
                        </Grid>
                </Grid>
                <div style={{height: "50px"}}>
                    {order.status === "inProcessing" && this.renderCancelButton()}
                </div>
            </Grid>
        );
    }
}

export default withTheme(OrderCard);