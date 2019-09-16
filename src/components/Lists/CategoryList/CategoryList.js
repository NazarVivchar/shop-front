import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import CategoryCard from "../../Category/CategoryCardContainer";

class CategoryList extends Component {
    areCategoriesAvailable() {
        return this.props.categories && this.props.categories;
    }

    renderCategories() {
        return (
            <Grid
                container
                alignItems="center"
                justify="center">
                {this.props.categories.map(category => (
                   <CategoryCard key={category.id} category = {category}/>
                ))}
            </Grid>
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