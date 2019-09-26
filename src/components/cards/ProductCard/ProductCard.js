import React, {Component} from "react";
import Typography from "@material-ui/core/Typography/index";
import Grid from "@material-ui/core/Grid/index";
import withTheme from "@material-ui/core/styles/withTheme";
import Button from "@material-ui/core/Button/index";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import EditIcon from "@material-ui/icons/Create"
import "./ProductCard.scss"
import ProductDialog from "../../dialogs/ProductDialog/EditingProductDialogContainer";
import ConfirmDialog from "../../dialogs/ConfirmDialog/ConfirmDialog";
import Slider from "@material-ui/core/Slider";
import round from 'lodash.round';

class ProductCard extends Component {
    state = {
        isEditingDialogOpened: false,
        isDeletingDialogOpened: false,
        discount: this.props.product.discount
    };

    handleEditingDialogOpen = () => {
        this.setState({
            isEditingDialogOpened: true
        })
    };

    handleEditingDialogClose = () => {
        this.setState({
            isEditingDialogOpened: false
        })
    };

    handleDeletingDialogOpen = () => {
        this.setState({
            isDeletingDialogOpened: true
        })
    };

    handleDeletingDialogClose = () => {
        this.setState({
            isDeletingDialogOpened: false
        })
    };

    handleDiscountChange = (event, value) => {
        this.setState({
            discount: value
        })
    };

    handleDiscountSubmit = () => {
        this.props.setDiscount(this.state.discount);
    };

    addToOrder = () => {
        if (this.props.isOrderInProgress) {
            this.props.addToOrder(this.props.username, this.props.orderInProgress);
        } else this.props.addToNewOrder(this.props.username);
    };

    renderUserVariant() {
        const {theme} = this.props;
        return (
            <>
                {
                    this.props.isProductInOrder
                        ?
                        <Typography
                            variant="h6"
                            style={{color: "green"}}>
                            У кошику
                        </Typography>
                        : <Button variant="outlined" color="secondary" size="small" onClick={this.addToOrder}>
                            <AddShoppingCartIcon style={{color: theme.palette.secondary.dark}}/>
                        </Button>
                }
            </>
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

    renderDiscountPicker() {
        const {theme} = this.props;

        return (
            <Grid container direction="row" style={{
                height: "15%",
                paddingBottom: theme.spacing(3)
            }}>
                <Grid
                    container
                    justify="space-between">
                    <Typography gutterBottom>
                        Знижка
                    </Typography>
                    <Typography gutterBottom>
                        {this.state.discount}%
                    </Typography>
                </Grid>
                <Slider
                    defaultValue={0}
                    step={5}
                    marks
                    min={0}
                    max={95}
                    color="secondary"
                    valueLabelDisplay="auto"
                    onChange={this.handleDiscountChange}
                    onChangeCommitted={this.handleDiscountSubmit}
                />
            </Grid>
        )
    }

    renderDiscountMessage() {
        const {theme, product} = this.props;

        return (
            <Grid container
                  justify="center"
                  alignItems="center"
                  style={{
                      height: "15%",
                      paddingBottom: theme.spacing(3)
                  }}>
                <Typography
                    align="center"
                    variant="h6"
                    color="secondary">
                    Акція! Знижка <b>{product.discount}%</b>
                </Typography>
            </Grid>
        )
    }


    render() {
        const {product, theme} = this.props;
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                style={{
                    padding: theme.spacing(2),
                    margin: theme.spacing(2)
                }}
                className="product-container">
                <Grid item style={{height: "40%"}}>
                    <img
                        src={`data:image/gif;base64,${product.image}`}
                        alt={`${product.name} was supposed to be here :(`}
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
                            height: "15%"
                        }}>
                        {product.name}
                    </Typography>
                </Grid>
                <Grid
                    item
                    style={{
                        height: !!product.discount? "20%": "35%",
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
                {this.props.isUserLogged
                && this.props.showAdminControls
                    ? this.renderDiscountPicker()
                    : !!product.discount && this.renderDiscountMessage()}
                <Grid
                    container
                    justify="space-between"
                    style={{
                        height: "15%"
                    }}>
                    <Grid item>
                        <Typography
                            variant="h6"
                            style={{
                                fontWeight: 600,
                                color: product.discount ? "red" : ""
                            }}>
                            {`$  ${round(product.price * (1 - product.discount / 100), 2)}`}
                        </Typography>
                    </Grid>
                    <Grid item>
                        {this.props.isUserLogged && (
                            this.props.showAdminControls
                                ? this.renderAdminVariant()
                                : this.renderUserVariant()
                        )}
                    </Grid>

                </Grid>

            </Grid>
        )
    }
}

export default withTheme(ProductCard);