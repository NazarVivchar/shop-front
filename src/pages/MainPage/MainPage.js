import React, {Component} from "react";
import SimpleSelect from "../../components/SimpleSelect/SimpleSelect";
import Grid from "@material-ui/core/Grid";
import theme from "../../theme";
import ProductList from "../../components/Lists/ProductList/ProductListContainer";
import withTheme from "@material-ui/core/styles/withTheme";

class MainPage extends Component {
    state = {
        selectedCategory: this.props.categoryOptions[0],
        selectedOrder: this.props.orderOptions[0],
        isWrongRoleMessageDisplayed: false,
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
                <div style={{margin: this.props.theme.spacing(1)}}>
                    <SimpleSelect
                        label={'Категорія'}
                        defaultOption={this.props.categoryOptions[0]}
                        selected={this.state.selectedCategory}
                        options={this.props.categoryOptions}
                        handleChange={this.onCategoryChange}
                    />
                </div>
                }
                {this.state && this.state.selectedOrder &&
                <div style={{margin: this.props.theme.spacing(1)}}>
                    <SimpleSelect
                        label={'Сортування'}
                        defaultOption={this.props.orderOptions[0]}
                        selected={this.state.selectedOrder}
                        options={this.props.orderOptions}
                        handleChange={this.onOrderChange}
                    />
                </div>
                }
            </Grid>)
    }

    renderProducts() {
        return (
            <>
                {this.renderSelects()}

                {<ProductList
                    selectedCategoryId={this.state.selectedCategory.id}
                    sortingField={this.state.selectedOrder.field}
                    sortingOrder={this.state.selectedOrder.order}
                />}
            </>
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

export default withTheme(MainPage);