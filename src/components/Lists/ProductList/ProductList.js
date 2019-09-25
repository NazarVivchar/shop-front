import ProductCard from "../../Product/ProductCardContainer";
import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import Paginator from "../../paginator/Paginator";

class productList extends Component {
    state = {
        selectedPage: 1,
        step: 12
    };

    handlePageChange = selectedPage => () => {
        const numberOfElements = this.props.products.length;
        const firstPage = 1;
        const lastPage = Math.ceil(numberOfElements / this.state.step);

        if (selectedPage > lastPage) {
            selectedPage = firstPage
        } else if (selectedPage < firstPage) {
            selectedPage = lastPage
        }
        this.setState({selectedPage});
    };


    areProductsAvailable() {
        return this.props.products && this.props.products.length;
    }

    renderProducts() {
        return (
            <>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                >
                    {this.props.products
                        .slice((this.state.selectedPage - 1) * this.state.step, this.state.selectedPage * this.state.step)
                        .map(product => (
                            <Grid item key={product.id}>
                                <ProductCard showAdminControls={this.props.isAdminList} product={product} addToOrder={this.props.addProductToOrder}/>
                            </Grid>
                        ))}
                </Grid>
                <Paginator
                    numberOfElements={this.props.products.length}
                    step={this.state.step}
                    handlePageChange={this.handlePageChange}
                    selectedPage={this.state.selectedPage}/>
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