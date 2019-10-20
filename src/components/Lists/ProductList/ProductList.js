import ProductCard from "../../cards/ProductCard/ProductCardContainer";
import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import Paginator from "../../paginator/Paginator";

class productList extends Component {
    state = {
        selectedPage: 1,
        step: 8
    };

    componentDidMount() {
        this.props.loadData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.selectedCategoryId !== prevProps.selectedCategoryId) {
            this.props.loadData();
        }
    }

    handlePageChange = selectedPage => () => {
        const numberOfElements = this.props.productsAmount;
        const firstPage = 1;
        const lastPage = Math.ceil(numberOfElements / this.state.step);

        if (selectedPage > lastPage) {
            selectedPage = firstPage;
        } else if (selectedPage < firstPage) {
            selectedPage = lastPage
        }

        this.props.changePagination(selectedPage);
        this.props.loadData();
        this.setState({selectedPage});
    };


    areProductsAvailable() {
        return this.props.productsAmount;
    }

    renderProducts() {
        return (
            <>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    style={{minHeight: "60vh"}}>
                    {this.props.products
                        .map(product => (
                            <Grid item key={product.id}>
                                <ProductCard showAdminControls={this.props.isAdminList} product={product}
                                             addToOrder={this.props.addProductToOrder}/>
                            </Grid>
                        ))}
                </Grid>
                {this.state.step < this.props.productsAmount
                && < Paginator
                    numberOfElements={this.props.productsAmount}
                    step={this.state.step}
                    handlePageChange={this.handlePageChange}
                    selectedPage={this.state.selectedPage}/>
                }
            </>
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
                    Товари не знайдено
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

export default withTheme(productList);