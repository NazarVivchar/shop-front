import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import CategoryCard from "../../cards/CategoryCard/CategoryCardContainer";
import Paginator from "../../paginator/Paginator";

class CategoryList extends Component {
    state = {
        selectedPage: 1,
        step: 6
    };

    handlePageChange = selectedPage => () => {
        const numberOfElements = this.props.categories.length;
        const firstPage = 1;
        const lastPage = Math.ceil(numberOfElements / this.state.step);

        if (selectedPage > lastPage) {
            selectedPage = firstPage
        } else if (selectedPage < firstPage) {
            selectedPage = lastPage
        }
        this.setState({selectedPage});
    };

    areCategoriesAvailable() {
        return this.props.categories && this.props.categories;
    }

    renderCategories() {
        return (
            <>
                <Grid
                    container
                    alignItems="flex-start"
                    justify="center"
                    style={{minHeight: "70vh"}}>
                    {this.props.categories
                        .slice((this.state.selectedPage - 1) * this.state.step, this.state.selectedPage * this.state.step)
                        .map(category => (
                            <CategoryCard key={category.id} category={category}/>
                        ))}
                </Grid>
                <Paginator
                    numberOfElements={this.props.categories.length}
                    step={this.state.step}
                    handlePageChange={this.handlePageChange}
                    selectedPage={this.state.selectedPage}/>

            </>
        )
    }

    renderNoAvailableCategories() {
        return (
            <Grid
                container
                alignItems="center"
                justify="center">
                <Typography
                    variant="h2"
                    style={{marginTop: this.props.theme.spacing(30)}}>
                    Категорії не знайдено
                </Typography>
            </Grid>
        )
    }

    render() {
        return (
            this.areCategoriesAvailable()
                ? this.renderCategories()
                : this.renderNoAvailableCategories()
        )
    }
}

export default withTheme(CategoryList);