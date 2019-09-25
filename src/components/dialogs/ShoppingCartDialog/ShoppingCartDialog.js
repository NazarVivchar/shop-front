import React, {Component} from "react";
import {Dialog} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import OrderedProductsList from "../../Lists/OrderedProductsList/OrderedProductsList";
import withTheme from "@material-ui/core/styles/withTheme";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/close"
import IconButton from "@material-ui/core/IconButton";


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

    renderDialog() {

        return (
            <Dialog
                open={this.props.isOpened}
                onClose={this.props.handleClose}
                fullWidth
                maxWidth="lg"
                fullScreen={window.screen.width < 500}>
                <DialogTitle>
                    <Grid container alignItems="center" justify="space-between">
                        Корзина
                        <IconButton onClick={this.props.handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                        <OrderedProductsList
                            orderedProducts={this.props.userOrder.find(userOrder => userOrder.status === "inProgress").orderedProducts}/>
                </DialogContent>
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