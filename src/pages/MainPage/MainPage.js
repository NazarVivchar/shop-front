import React, {Component} from "react";
import SimpleSelect from "../../components/SimpleSelect/SimpleSelect";
import Grid from "@material-ui/core/Grid";
import theme from "../../theme";
import ProductList from "../../components/Lists/ProductListContainer";

class MainPage extends Component {
    state = {
        selectedCategory: this.props.categoryOptions[0]
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

    areProductsAvailable() {
        return this.props.products && this.props.products.length;
    }

    renderProducts() {
        return (
            <>
                {this.state && this.state.selectedCategory &&
                <SimpleSelect
                    label={'Категорія'}
                    defaultOption={this.props.categoryOptions[0]}
                    selected={this.state.selectedCategory}
                    options={this.props.categoryOptions}
                    handleChange={this.onCategoryChange}
                />}
                <Grid
                    container
                    direction="column">
                    <Grid item>

                    </Grid>
                    <Grid
                        container
                        style={{padding: ` 0 ${theme.spacing(2)}px`}}>
                        {<ProductList selectedCategoryId={this.state.selectedCategory.id}/>}
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

export default MainPage;