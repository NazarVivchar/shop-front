import Grid from "@material-ui/core/Grid";
import React, {Component} from "react";
import ProductCard from "../Product/ProductCard";
import theme from "../../theme";
import SimpleSelect from "../simpleSelect/SimpleSelect";
import ProductList from "../Lists/ProductList";
import {selectProductByCategory} from "../../selectors/productSelectors";

class ProductsLayout extends Component {
    state = {
        selectedCategory: '0'
    };
    onCategoryChange = event => {
        this.setState({
            selectedCategory: event.target.value
        })
    };

    componentDidMount() {
        this.props.loadData();
    }

    areProductsAvailable() {
        return this.props.products && this.props.products.length;
    }

    renderProducts() {
        console.log(this.state.selectedCategory);
        return (
            <>
                <SimpleSelect
                    label={'Категорія'}
                    placeholder={'Усі'}
                    selectedValue={this.state.selectedCategory}
                    options={this.props.categories}
                    handleChange={this.onCategoryChange}
                />
                <Grid
                    container
                    direction="column">
                    <Grid item>

                    </Grid>
                    <Grid
                        container
                        style={{padding: ` 0 ${theme.spacing(2)}px`}}>
                        {<ProductList products={selectProductByCategory(this.props.products, this.state.selectedCategory)}/>}
                    </Grid>
                </Grid>
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

export default ProductsLayout;