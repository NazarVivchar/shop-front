import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import OrderCard from "../../cards/OrderCard/OrderCardContainer";
import withTheme from "@material-ui/core/styles/withTheme";


class OrderList extends Component {
    componentDidMount() {
        if (this.props.isUserLogged) {
            this.props.loadUserOrder(this.props.username);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isUserLogged !== this.props.isUserLogged) {
            this.props.loadUserOrder(this.props.username);
        }
    }

    areOrdersAvailable() {
        return this.props.orders && this.props.orders.length;
    }

    renderOrders() {
        return (
            <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
                style={{minHeight: "60vh"}}>
                {this.props.orders
                    .filter(order=>order.status!=="inProgress")
                    .map(order => (
                        <OrderCard key={order.id} order={order}/>
                    ))}
            </Grid>
        )
    }

    renderNoAvailableOrders() {
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center">
                <Typography
                    variant="h2"
                    style={{marginTop: this.props.theme.spacing(30)}}>
                    Історія покупок порожня
                </Typography>
            </Grid>
        )
    }


    render() {
        return (
            this.areOrdersAvailable()
                ? this.renderOrders()
                : this.renderNoAvailableOrders()
        )
    }
}

export default withTheme(OrderList);

