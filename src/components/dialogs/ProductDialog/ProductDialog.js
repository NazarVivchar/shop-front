import Dialog from "@material-ui/core/Dialog";
import React, {Component} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Field, Form, Formik} from 'formik';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SimpleSelect from "../../SimpleSelect/SimpleSelect";
import withTheme from "@material-ui/core/styles/withTheme";
import * as Yup from "yup";

class ProductDialog extends Component {
    state = {
        ...this.props.initialState
    };

    componentDidMount() {
        this.props.loadData();
    }

    onCategoryChange = event => {
        const selectedCategory = this.props.categories
            .find(option => option.id === event.target.value);

        this.setState({
            product: {
                ...this.state.product,
                category: selectedCategory
            },
        })
    };

    handleFileChange = event => {
        const fileReader = new FileReader();
        const imageName = event.target.files[0].name;
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = event => {
            this.setState({
                product: {
                    ...this.state.product,
                    image: event.target.result,
                },
                imageName
            })
        };
    };

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
            description: Yup.string().max(100, "опис не може бути довшим 100 символів"),
            price: Yup.number()
                .positive('Число має бути більшим 0')
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
                            this.props.product
                                ? {
                                    name: this.props.product.name,
                                    description: this.props.product.description,
                                    price: this.props.product.price,
                                }
                                : {
                                    name: "",
                                    description: "",
                                    price: "",
                                }
                        }
                        validationSchema={ValidationSchema}
                        onSubmit={values => {
                            const product = {
                                ...values,
                                id: this.state.product.id,
                                category: this.state.product.category,
                                image: this.state.product.image
                            };
                            if ((product.id !== 0) && product.image !== "") {
                                this.props.handleSubmit(product)
                                this.props.handleClose();
                            }
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
                                      style={{height: "400px"}}>
                                    <Field name="name"
                                           render={this.renderTextField("text", "Назва")}/>
                                    {this.renderErrorMessage(errors, touched, "name")}
                                    <Field name="description"
                                           render={this.renderTextField("text", "Опис")}/>
                                    {this.renderErrorMessage(errors, touched, "name")}
                                    <Field name="price"
                                           render={this.renderTextField("number", "Ціна")}/>
                                    {this.renderErrorMessage(errors, touched, "price")}
                                    <SimpleSelect
                                        label={'Категорія'}
                                        width="100%"
                                        placeholder={this.props.product ? null : {id: 0, name: "Виберіть значення"}}
                                        selected={this.state.product.category || this.props.category || {id: 0}}
                                        options={this.props.categories}
                                        handleChange={this.onCategoryChange}
                                    />
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="small"
                                        component="label">
                                        {this.props.chooseImageText}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            style={{display: "none"}}
                                            onChange={this.handleFileChange}
                                        />
                                    </Button>
                                    <div style={{
                                        overflowX: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        width: "100%"
                                    }}>
                                        <Typography
                                            variant="subtitle1"
                                            noWrap>
                                            {this.state.imageName && `Вибране зображення: ${this.state.imageName}`}
                                            &nbsp;
                                        </Typography>
                                    </div>
                                </Grid>
                                < DialogActions>
                                    < Button
                                        onClick={this.props.handleClose}>
                                        Скасувати
                                    </Button>
                                    <Button
                                        color="secondary"
                                        type="submit"
                                        disabled={!this.state.product.category.id || !this.state.product.image}>
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

export default withTheme(ProductDialog);