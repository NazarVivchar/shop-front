import Dialog from "@material-ui/core/Dialog";
import React, {Component} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Formik} from 'formik';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import withTheme from "@material-ui/core/styles/withTheme";

class CategoryDialog extends Component {
    state = {
        ...this.props.initialState
    };

    resetState() {
        this.setState({
            ...this.props.initialState
        })
    }

    componentDidMount() {
        this.props.loadData();
    }

    handleChange = event => {
        const target = event.target;
        this.setState({
            category: {
                ...this.state.category,
                [target.name]: target.value
            }
        })
    };

    handleSubmit = () => {
        const category = this.state.category;
        this.props.handleSubmit(category);
        this.props.handleClose();
    };
    
    handleClose = () => {
        this.props.handleClose();
        this.resetState();
    };

    render() {
        const {theme} = this.props;

        return (
            <Dialog
                open={this.props.isOpened}
                onClose={this.handleClose}
                PaperProps={{style: {margin: theme.spacing(2)}}}>
                <DialogTitle>
                    Товар
                </DialogTitle>
                <DialogContent>
                    <Formik
                        render={props => (
                            <Grid container
                                  direction="column"
                                  alignItems={"stretch"}
                                  justify={"space-between"}
                                  className="dialog">
                                <TextField
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.category.name}
                                    name="name"
                                    label="Назва"
                                />
                            </Grid>
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.handleClose}>
                        Скасувати
                    </Button>
                    <Button
                        color="secondary"
                        onClick={this.handleSubmit}>
                        Зберегти
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withTheme(CategoryDialog);