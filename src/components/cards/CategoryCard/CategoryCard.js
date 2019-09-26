import React, {Component} from "react";
import Typography from "@material-ui/core/Typography/index";
import Grid from "@material-ui/core/Grid/index";
import withTheme from "@material-ui/core/styles/withTheme";
import Button from "@material-ui/core/Button/index";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import EditIcon from "@material-ui/icons/Create"
import ConfirmDialog from "../../dialogs/ConfirmDialog/ConfirmDialog";
import "./CategoryCard.scss"
import CategoryDialog from "../../dialogs/CategoryDialog/EditingCategoryDialogContainer";

class CategoryCard extends Component {
    state = {
        isEditingDialogOpened: false,
        isDeletingDialogOpened: false,
    };

    componentDidMount() {
        this.props.loadData();
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
        this.setState(prevState => ({
            isDeletingDialogOpened: false
        }))
    };


    render() {
        const {category, theme} = this.props;
        return (
            <Grid
                container
                alignItems="center"
                justify="space-between"
                style={{
                    padding: theme.spacing(2),
                    margin: theme.spacing(2),
                }}
                className="category-container">
                <Grid item>
                    <Typography
                        gutterBottom
                        variant="h6"
                        align="center"
                        style={{
                            color: theme.palette.secondary.dark,
                            minWidth: "200px"
                        }}>
                        {category.name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        gutterBottom
                        align="center">
                        Кількість товарів у категорії: {this.props.numberOfProducts}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        color="primary"
                        disabled={!!this.props.numberOfProducts}
                        onClick={this.handleDeletingDialogOpen}
                        style={{
                            marginRight: theme.spacing(1)
                        }}>
                        <DeleteForeverIcon style={{color: !this.props.numberOfProducts? "red" : "lightgrey"}}/>
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
                    <CategoryDialog
                        category={this.props.category}
                        isOpened={this.state.isEditingDialogOpened}
                        handleClose={this.handleEditingDialogClose}/>
                    <ConfirmDialog
                        messageText="Ви впевнені, що хочете видалити цю категорію?"
                        mainButtonText="Видалити"
                        isOpened={this.state.isDeletingDialogOpened}
                        handleClose={this.handleDeletingDialogClose}
                        handleConfirm={this.props.handleDelete}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default withTheme(CategoryCard);