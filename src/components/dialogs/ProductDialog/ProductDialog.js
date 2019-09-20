import Dialog from "@material-ui/core/Dialog";
import React, {Component} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Formik} from 'formik';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SimpleSelect from "../../SimpleSelect/SimpleSelect";
import withTheme from "@material-ui/core/styles/withTheme";

class ProductDialog extends Component {
    state = {
        ...this.props.initialState
    };

    resetState() {
        this.setState({...this.props.initialState})
    }

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

    handleChange = event => {
        const target = event.target;
        this.setState({
            product: {
                ...this.state.product,
                [target.name]: target.value
            }
        })
    };

    handleSubmit = () => {
        const product = this.state.product;
        this.props.handleSubmit(product);
        this.props.handleClose();
    };

    handleClose = () => {
        this.resetState();
        this.props.handleClose();
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
                                    value={this.state.product.name}
                                    name="name"
                                    label="Назва"
                                />
                                <TextField
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.product.description}
                                    name="description"
                                    label="Опис"
                                />
                                <TextField
                                    type="number"
                                    InputLabelProps={{shrink: !!this.state.product.price || this.state.shouldPriceShrink}}
                                    onFocus={() => {
                                        this.setState({shouldPriceShrink: true})
                                    }}
                                    onBlur={() => {
                                        this.setState({shouldPriceShrink: false})
                                    }}
                                    onChange={this.handleChange}
                                    value={this.state.product.price}
                                    name="price"
                                    label="Ціна"
                                />
                                <SimpleSelect
                                    label={'Категорія'}
                                    width="100%"
                                    placeholder={{id: 0, name: "Виберіть значення"}}
                                    selected={this.state.product.category || {id: 0}}
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
                                {this.state.imageName &&
                                <div style={{
                                    overflowX: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    width: "100%"
                                }}>
                                    <Typography
                                        variant="subtitle1"
                                        noWrap>
                                        Вибране зображення: {this.state.imageName}
                                    </Typography>
                                </div>}
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
                        disabled={this.state.product.category.id===0}
                        color="secondary"
                        onClick={this.handleSubmit}>
                        Зберегти
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withTheme(ProductDialog);