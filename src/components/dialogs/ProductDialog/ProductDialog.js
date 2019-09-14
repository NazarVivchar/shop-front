import Dialog from "@material-ui/core/Dialog";
import React, {Component} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Formik} from 'formik';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

class ProductDialog extends Component {
    state = {
        name: '',
        description: '',
        price: '',
        image: '',
        imageName: '',
        shouldPriceShrink: false,
    };

    handleChange = event => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    handleFileChange = event => {
        const fileReader  = new FileReader();
        const imageName = event.target.files[0].name;
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload =  event => {
            console.log(event.target);
            this.setState({
                image: event.target.result,
                imageName
            })
        };
    };

    render() {
        return (
            <Dialog
                open={this.props.isOpened}
                onClose={this.props.handleClose}>
                <DialogTitle>
                    Товар
                </DialogTitle>
                <DialogContent>
                    <Formik
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                actions.setSubmitting(false);
                            }, 1000);
                        }}
                        render={props => (
                            <Grid container
                                  direction="column"
                                  alignItems={"stretch"}
                                  justify={"space-between"}
                                  style={{
                                      width: "400px",
                                      height: "300px"
                                  }}>
                                <TextField
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    name="name"
                                    label="Назва"
                                />
                                <TextField
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.description}
                                    name="description"
                                    label="Опис"
                                />
                                <TextField
                                    type="number"
                                    InputLabelProps={{ shrink: !!this.state.price || this.state.shouldPriceShrink}}
                                    onFocus={() => {this.setState({shouldPriceShrink: true})}}
                                    onBlur={() => {this.setState({shouldPriceShrink: false})}}
                                    onChange={this.handleChange}
                                    value={this.state.price}
                                    name="price"
                                    label="Ціна"
                                />
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    component="label">
                                    Вибрати зображєння
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={this.handleFileChange}
                                    />
                                </Button>
                                { this.state.imageName &&
                                <Typography
                                variant="subtitle1">
                                    Вибране зображення: {this.state.imageName}
                                </Typography>}
                            </Grid>
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.props.handleClose}>
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

export default ProductDialog;