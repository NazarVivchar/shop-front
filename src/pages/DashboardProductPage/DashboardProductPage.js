import React, {Component} from "react";
import SimpleSelect from "../../components/SimpleSelect/SimpleSelect";
import Grid from "@material-ui/core/Grid";
import theme from "../../theme";
import ProductList from "../../components/Lists/ProductList/ProductListContainer";
import {withTheme} from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add"
import CustomFab from "../../components/buttons/CustomFab/CustomFab";
import ProductDialog from "../../components/dialogs/ProductDialog/ProductDialog";

class DashboardProductPage extends Component {
    state = {
        selectedCategory: this.props.categoryOptions[0],
        selectedOrder: this.props.orderOptions[0],
        isAddingDialogOpened: false,
    };


    componentDidMount() {
        this.props.loadData();
    }

    onCategoryChange = event => {
        const selectedCategory = this.props.categoryOptions
            .find(option => option.id === event.target.value);

        this.setState({
            selectedCategory: {
                ...selectedCategory
            }
        })
    };

    onOrderChange = event => {
        const selectedOrder = this.props.orderOptions
            .find(option => option.id === event.target.value);

        this.setState({
            selectedOrder: {
                ...selectedOrder
            }
        })
    };

    handleAddingDialogOpen = () => {
        this.setState({isAddingDialogOpened: true});
    };

    handleAddingDialogClose = () => {
        this.setState({isAddingDialogOpened: false});
    };

    areProductsAvailable() {
        return this.props.products && this.props.products.length;
    }

    renderSelects() {
        return (
            <Grid
                container
                justify="flex-end"
                alignItems="center"
                style={{margin: `${theme.spacing(2)}px 0`}}>
                {this.state && this.state.selectedCategory &&
                <SimpleSelect
                    label={'Категорія'}
                    defaultOption={this.props.categoryOptions[0]}
                    selected={this.state.selectedCategory}
                    options={this.props.categoryOptions}
                    handleChange={this.onCategoryChange}
                />}
                {this.state && this.state.selectedOrder &&
                <SimpleSelect
                    label={'Сортування'}
                    defaultOption={this.props.orderOptions[0]}
                    selected={this.state.selectedOrder}
                    options={this.props.orderOptions}
                    handleChange={this.onOrderChange}
                />}
            </Grid>)
    }

    renderProducts() {
        const {theme} = this.props;
        return (
            <Grid
                container
                direction="column"
                style={{padding: ` 0 ${theme.spacing(2)}px`}}>
                {this.renderSelects()}
                <Grid container>
                    {<ProductList
                        selectedCategoryId={this.state.selectedCategory.id}
                        sortingField={this.state.selectedOrder.field}
                        sortingOrder={this.state.selectedOrder.order}
                    />}
                </Grid>
                <CustomFab onClick={this.handleAddingDialogOpen}>
                    <AddIcon/>
                </CustomFab>
                <ProductDialog
                    isOpened={this.state.isAddingDialogOpened}
                    handleClose={this.handleAddingDialogClose}
                />
            </Grid>
        )
    }

    renderUnavailableProducts() {
        return <h1>No products are available</h1>
    }

    render() {
        return (
            this.areProductsAvailable()
                ? this.renderProducts()
                : this.renderUnavailableProducts()
        )
    }
}

export default withTheme(DashboardProductPage);