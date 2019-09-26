import React, {Component} from "react";
import {Dialog} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import OrderedProductsList from "../../Lists/OrderedProductsList/OrderedProductsList";
import withTheme from "@material-ui/core/styles/withTheme";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton";
import theme from "../../../theme";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


class ShoppingCartDialog extends Component {
    componentDidMount() {
        if (this.props.isUserLogged) {
            this.props.loadData(this.props.username);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isUserLogged !== this.props.isUserLogged) {
            this.props.loadData();
        }
    }

    placeOrder = order => () => {
        this.props.placeOrder(this.props.username, order);
        this.props.handleClose();
    };

    cancelOrder = order => () => {
        this.props.cancelOrder(this.props.username, order);
        this.props.handleClose();
    };

    getOrderedProductsFromOrder(order) {
        return order && order.orderedProducts;
    };

    renderDialogActions() {
        const {userOrder} = this.props;
        const foundUserOrder = userOrder && userOrder.find(userOrder => userOrder.status === "inProgress");

        return (
            <Grid
                container
                alignItems="center"
                direction="column">

                <Grid container justify="center" alignItems="center">
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="medium"
                        onClick={this.placeOrder(foundUserOrder)}
                        style={{marginRight: theme.spacing(1)}}>
                        Замовити
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="medium"
                        onClick={this.cancelOrder(foundUserOrder)}
                        style={{marginLeft: theme.spacing(1)}}>
                        <Typography style={{color: "red"}}>
                            Очистити
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        )
    }

    renderDialog() {
        const {userOrder} = this.props;
        const foundUserOrder = userOrder && userOrder.find(userOrder => userOrder.status === "inProgress");

        return (
            <Dialog
                open={this.props.isOpened}
                onClose={this.props.handleClose}
                fullWidth
                maxWidth="lg"
                scroll="paper"
                PaperProps={{style: {minHeight: "700px"}}}
                fullScreen={window.screen.width < 500}>
                <DialogTitle
                    style={{background: theme.palette.primary.main}}>
                    <Grid
                        container
                        alignItems="center"
                        justify="space-between"
                        style={{color: "white"}}>
                        Кошик
                        <IconButton onClick={this.props.handleClose}>
                            <CloseIcon style={{color: "white"}}/>
                        </IconButton>
                    </Grid>
                </DialogTitle>
                <DialogContent style={{minHeight: "400px"}}>
                    <OrderedProductsList
                        orderedProducts={this.getOrderedProductsFromOrder(foundUserOrder)}/>
                    <Grid
                        container
                        alignItems="flex-start"
                        justify="flex-start"
                        style={{marginTop: theme.spacing(5)}}>

                    </Grid>
                </DialogContent>
                <DialogActions style={{height: "100px"}}>
                    {foundUserOrder && this.renderDialogActions()}
                </DialogActions>
            </Dialog>
        )
    }

    render() {
        return (
            <>
                {this.props.userOrder && this.renderDialog()}
            </>
        )


    }
}

export default withTheme(ShoppingCartDialog);