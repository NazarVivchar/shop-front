import Dialog from "@material-ui/core/Dialog";
import React, {Component} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Field, Form, Formik} from 'formik';
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import withTheme from "@material-ui/core/styles/withTheme";
import "./CategoryDialog.scss";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class CategoryDialog extends Component {
    state = {
        ...this.props.initialState
    };

    componentDidMount() {
        this.props.loadData();
    }

    renderTextField(type, label, autoComplete) {
        return function ({field, name, value, onChange, onBlur}) {
            return (
                <TextField
                    {...field}
                    {...name}
                    {...value}
                    {...onBlur}
                    {...onChange}
                    autoComplete={autoComplete}
                    type={type}
                    label={label}
                />
            )
        }
    }

    renderErrorMessage(errors, touched, name) {
        return (
            <Typography
                color="error">
                {errors[name] && touched[name] && errors[name]}
                &nbsp;
            </Typography>
        )
    }

    render() {
        const {theme} = this.props;
        const ValidationSchema = Yup.object().shape({
            name: Yup.string()
                .max(50, "Назва не можу бути довшою 50 символів")
                .required('Це поле обов\'язкове'),
        });

        return (
            <Dialog
                open={this.props.isOpened}
                onClose={this.props.handleClose}
                PaperProps={{style: {margin: theme.spacing(2)}}}>
                <DialogTitle>
                    Товар
                </DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={
                            this.props.category
                                ? {
                                    name: this.props.category.name,
                                }
                                : {
                                    name: "",
                                }
                        }
                        validationSchema={ValidationSchema}
                        onSubmit={values => {
                            const category = {
                                ...values,
                                id: this.state.category.id,
                            };
                            this.props.handleSubmit(category);
                            this.props.handleClose();
                        }}
                    >
                        {({errors, touched}) => (
                            <Form
                                context={{isRegisterForm: this.props.isRegisterForm}}>
                                <Grid container
                                      direction="column"
                                      alignItems={"stretch"}
                                      justify="space-around"
                                      className="dialog"
                                      style={{height: "100px"}}>
                                    <Field name="name"
                                           render={this.renderTextField("text", "Назва")}/>
                                    {this.renderErrorMessage(errors, touched, "name")}
                                </Grid>
                                <DialogActions>
                                    <Button
                                        onClick={this.props.handleClose}>
                                        Скасувати
                                    </Button>
                                    <Button
                                        type="submit"
                                        color="secondary">
                                        Зберегти
                                    </Button>
                                </DialogActions>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        )
    }
}

export default withTheme(CategoryDialog);