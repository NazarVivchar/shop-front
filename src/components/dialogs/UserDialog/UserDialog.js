import Dialog from "@material-ui/core/Dialog";
import React, {Component} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Field, Form, Formik} from 'formik';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import "./UserDialog.scss"
import withTheme from "@material-ui/core/styles/withTheme";
import Typography from "@material-ui/core/Typography";
import * as Yup from "yup";

class UserDialog extends Component {

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

    renderPasswordRepeatInput(errors, touched) {
        return (
            <>
                <Field name="passwordRepeat"
                       render={this.renderTextField("password", "Пароль ще раз", "new-password")}/>
                {this.renderErrorMessage(errors, touched, "passwordRepeat")}
            </>
        )
    }

    renderNameSurnameInputs(errors, touched) {
        return (
            <>
                <Field name="name"
                       render={this.renderTextField("text", "Ім'я", "name")}/>
                {this.renderErrorMessage(errors, touched, "name")}
                <Field name="surname"
                       render={this.renderTextField("text", "Прізвище", "surname")}/>
                {this.renderErrorMessage(errors, touched, "surname")}
            </>
        )
    }

    render() {
        const {theme} = this.props;
        const {isRegisterForm} = this.props;

        const ValidationSchema = Yup.object().shape({
            name: Yup.string()
                .when('$isRegisterForm', (isRegisterForm, schema) => (
                    isRegisterForm
                        ? schema.required('Це поле обов\'язкове')
                        : schema)),
            surname: Yup.string()
                .when('$isRegisterForm', (isRegisterForm, schema) => (
                    isRegisterForm
                        ? schema.required('Це поле обов\'язкове')
                        : schema)),
            username: Yup.string()
                .email('Неправильна адреса')
                .required('Це поле обов\'язкове'),
            password: Yup.string()
                .min(8, 'Надто короткий пароль')
                .required('Це поле обов\'язкове'),
            passwordRepeat: Yup.string()
                .test('passwords-match',
                    'Паролі не збігаються',
                    function (value) {
                        return this.parent.password === value || !isRegisterForm;
                    })
                .when('$isRegisterForm', (isRegisterForm, schema) => (
                    isRegisterForm
                        ? schema
                            .required('Це поле обов\'язкове')
                        : schema)),
        });
        return (
            <Dialog
                open={this.props.isOpened}
                onClose={this.props.handleClose}
                PaperProps={{style: {margin: theme.spacing(2)}}}>
                <DialogTitle>
                    <Typography
                        align="center"
                        style={{
                            marginTop: theme.spacing(5),
                            fontSize: "30px"
                        }}>
                        {this.props.dialogTitle}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            passwordRepeat: "",
                            name: "",
                            surname: ""
                        }}
                        validationSchema={ValidationSchema}
                        onSubmit={values => {
                            this.props.handleSubmit(values);
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
                                      style={{height: this.props.isRegisterForm ? "400px" : "200px"}}>
                                    <Field name="username"
                                           render={this.renderTextField("text", "Ел. пошта", "email")}/>
                                    {this.renderErrorMessage(errors, touched, "username")}
                                    {this.props.isRegisterForm && this.renderNameSurnameInputs(errors, touched)}
                                    <Field name="password"
                                           render={this.renderTextField("password", "Пароль", isRegisterForm? "new-password": "current-password")}/>
                                    {this.renderErrorMessage(errors, touched, "password")}
                                    {this.props.isRegisterForm && this.renderPasswordRepeatInput(errors, touched)}
                                    <Button
                                        color="secondary"
                                        onClick={this.props.handleFormSwap}>
                                        <Typography
                                            align="center">
                                            {this.props.suggestionText}
                                        </Typography>
                                    </Button>
                                </Grid>
                                < DialogActions>
                                    < Button
                                        onClick={this.props.handleClose}>
                                        Скасувати
                                    </Button>
                                    <Button
                                        color="secondary"
                                        type="submit">
                                        {this.props.confirmButtonText}
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

export default withTheme(UserDialog);