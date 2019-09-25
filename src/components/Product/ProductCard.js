import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withTheme from "@material-ui/core/styles/withTheme";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import EditIcon from "@material-ui/icons/Create"
import "./ProductCard.scss"
import ProductDialog from "../dialogs/ProductDialog/EditingProductDialogContainer";
import ConfirmDialog from "../dialogs/ConfirmDialog/ConfirmDialog";

class ProductCard extends Component {
    state = {
        isEditingDialogOpened: false,
        isDeletingDialogOpened: false,
    };

    handleEditingDialogOpen =() => {
        this.setState({
            isEditingDialogOpened: true
    })
    };

    handleEditingDialogClose =() => {
        this.setState({
            isEditingDialogOpened: false
        })
    };

    handleDeletingDialogOpen =() => {
        this.setState({
            isDeletingDialogOpened: true
        })
    };

    handleDeletingDialogClose =() => {
        this.setState({
            isDeletingDialogOpened: false
        })
    };

    addToOrder = () => {
        console.log(this.props.order);
        this.props.addToOrder(this.props.order);
    };

    renderUserVariant() {
        const {theme} = this.props;
        return (
            <Button variant="outlined" color="secondary" size="small" onClick={this.addToOrder}>
                <AddShoppingCartIcon style={{color: theme.palette.secondary.dark}}/>
            </Button>
        )
    }

    renderAdminVariant() {
        const {theme} = this.props;
        return (
            <>
                <Grid container>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.handleDeletingDialogOpen}
                        style={{
                            marginRight: theme.spacing(1)
                        }}>
                        <DeleteForeverIcon style={{color: "red"}}/>
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={this.handleEditingDialogOpen}
                        style={{
                            marginLeft: theme.spacing(1)
                        }}>
                        <EditIcon style={{color: theme.palette.secondary.dark}}/>
                    </Button>
                </Grid>
                <ProductDialog
                    product={this.props.product}
                    isOpened={this.state.isEditingDialogOpened}
                    handleClose={this.handleEditingDialogClose}/>
                    <ConfirmDialog
                        messageText="Ви впевнені, що хочете видалити цей продукт?"
                        mainButtonText="Видалити"
                        isOpened={this.state.isDeletingDialogOpened}
                        handleClose={this.handleDeletingDialogClose}
                        handleConfirm={this.props.handleDelete}
                    />

            </>
        )
    }


    render() {
        const {product, theme} = this.props;
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="space-between"
                style={{
                    padding: theme.spacing(2),
                    margin: theme.spacing(2)
                }}
                className="product-container">
                <Grid item style={{height: "40%"}}>
                    <img
                        src={`data:image/gif;base64,${product.image}`}
                        alt={`Image of ${product.name} was supposed to be here :(`}
                        align="middle"
                        style={{height: "100%", width: "auto"}}/>
                </Grid>
                <Grid item>
                    <Typography
                        gutterBottom
                        variant="h6"
                        align="center"
                        style={{
                            color: theme.palette.secondary.dark,
                            height: "25%"
                        }}>
                        {product.name}
                    </Typography>
                </Grid>
                <Grid
                    item
                    style={{
                        height: "25%",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }}>
                    <Typography
                        gutterBottom
                        align="center"
                        style={{
                            fontSize: "12px",
                            color: theme.palette.primary.light,
                        }}>
                        {product.description}
                    </Typography>
                </Grid>
                <Grid
                    container
                    justify="space-between"
                    style={{
                        height: "10%"
                    }}>
                    <Grid item>
                        <Typography
                            variant="h6"
                            style={{fontWeight: 600}}>
                            {`$  ${product.price}`}
                        </Typography>
                    </Grid>
                    <Grid item>
                        {this.props.showAdminControls
                            ? this.renderAdminVariant()
                            : this.renderUserVariant()}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withTheme(ProductCard);