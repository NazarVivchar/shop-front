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
import * as Yup from "Yup";

class UserDialog extends Component {
    state = {
        ...this.props.initialState
    };

    resetState() {
        this.setState({
            ...this.props.initialState
        })
    }

    handleChange = event => {
        const target = event.target;
        this.setState({
            user: {
                ...this.state.user,
                [target.name]: target.value
            }
        })
    };

    handleSubmit = () => {
        const user = this.state.user;
        this.props.handleSubmit(user);
        this.props.handleClose();
    };

    handleClose = () => {
        this.props.handleClose();
        this.resetState();
    };

    renderAdditionalInputs() {
        return (
            <>
                <TextField
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.passwordRepeat}
                    name="passwordRepeat"
                    label="Пароль ще раз"
                />
                <TextField
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.name}
                    name="name"
                    label="Ім'я"
                />
                <TextField
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.surname}
                    name="surname"
                    label="Прізвище"
                />
            </>
        )
    }

    render() {

        const SignupSchema = Yup.object().shape({
            firstName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            lastName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email')
                .required('Required'),
        });
        return (
            <div>
                <h1>Signup</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({errors, touched}) => (
                        <Form>
                            <Field name="firstName"
                                   render={({field, name, value, onChange, onBlur }) => (
                                       <TextField
                                           {...field}
                                           {...name}
                                           {...value}
                                           {...onBlur}
                                           {...onChange}
                                           type="text"
                                           // onChange={this.handleChange}
                                           // value={this.state.surname}
                                           // name="surname"
                                           label="Прізвище"
                                       />
                                   )}/>
                            {errors.firstName && touched.firstName ? (
                                <div>{errors.firstName}</div>
                            ) : null}
                            <Field name="lastName"/>
                            {errors.lastName && touched.lastName ? (
                                <div>{errors.lastName}</div>
                            ) : null}
                            <Field name="email" type="email"/>
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }

    // render() {
    //     const {theme} = this.props;
    //     return (
    //         <Dialog
    //             open={this.props.isOpened}
    //             onClose={this.handleClose}
    //             PaperProps={{style: {margin: theme.spacing(2)}}}>
    //             <DialogTitle>
    //                 <Typography
    //                     align="center"
    //                     style={{
    //                         marginTop: theme.spacing(5),
    //                         fontSize: "30px"
    //                     }}>
    //                     {this.props.dialogTitle}
    //                 </Typography>
    //             </DialogTitle>
    //             <DialogContent>
    //                 <Formik
    //                     render={props => (
    //                         <Grid container
    //                               direction="column"
    //                               alignItems={"stretch"}
    //                               justify="space-around"
    //                               className="dialog"
    //                               style={{height: this.props.isRegisterForm ? "400px": "250px"}}>
    //                             <TextField
    //                                 type="text"
    //                                 onChange={this.handleChange}
    //                                 value={this.state.username}
    //                                 name="username"
    //                                 label="Ел. пошта"
    //                             />
    //                             <TextField
    //                                 type="text"
    //                                 onChange={this.handleChange}
    //                                 value={this.state.password}
    //                                 name="password"
    //                                 label="Пароль"
    //                             />
    //                             {this.props.isRegisterForm && this.renderAdditionalInputs()}
    //                             <Button
    //                                 color="secondary"
    //                                 onClick={this.props.handleFormSwap}>
    //                                 <Typography
    //                                     align="center">
    //                                     {this.props.suggestionText}
    //                                 </Typography>
    //                             </Button>
    //                         </Grid>
    //                     )}
    //                 />
    //
    //             </DialogContent>
    //             < DialogActions>
    //                 < Button
    //                     onClick={this.handleClose}>
    //                     Скасувати
    //                 </Button>
    //                 <Button
    //                     color="secondary"
    //                     onClick={this.handleSubmit}>
    //                     {this.props.confirmButtonText}
    //                 </Button>
    //             </DialogActions>
    //         </Dialog>
    //     )
    // }
}

export default withTheme(UserDialog);