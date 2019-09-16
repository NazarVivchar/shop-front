import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {withTheme} from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add"
import CustomFab from "../../components/buttons/CustomFab/CustomFab";
import CategoryList from "../../components/Lists/CategoryList/CategoryListContainer";
import CategoryDialog from "../../components/dialogs/CategoryDialog/AddingCategoryDialogContainer";

class DashboardCategoryPage extends Component {
    state = {
        isAddingDialogOpened: false,
    };

    handleAddingDialogOpen = () => {
        this.setState({isAddingDialogOpened: true});
    };

    handleAddingDialogClose = () => {
        this.setState({isAddingDialogOpened: false});
    };

    render() {
        const {theme} = this.props;
        return (
            <Grid
                container
                direction="column"
                justify="center">
                <Grid container>
                    <CategoryList />
                </Grid>
                <CustomFab onClick={this.handleAddingDialogOpen}>
                    <AddIcon/>
                </CustomFab>
                <CategoryDialog
                    isOpened={this.state.isAddingDialogOpened}
                    handleClose={this.handleAddingDialogClose}
                />
            </Grid>
        )
    }
}

export default withTheme(DashboardCategoryPage);