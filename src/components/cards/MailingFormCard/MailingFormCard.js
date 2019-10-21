import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import withTheme from "@material-ui/core/styles/withTheme";
import "./MailingFormCard.scss"
import Button from "@material-ui/core/Button";
import axiosInstance from "../../../axiosInstance";
import CircularProgress from "@material-ui/core/CircularProgress";

const defaultState = {
    subject: '',
    text: '',
    loading: false,
};

class MailingFormCard extends Component {
    state = defaultState;

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.getAttribute("name")]: event.target.value,
        });
    };

    sendEmails = () => {
        const email = {
            subject: this.state.subject,
            text: this.state.text,
        };

        this.setState({
            loading: true
        });

        axiosInstance.post("/email", email).then(() => {
            this.setState({...defaultState});
        }).finally(() => {
            this.setState({
                loading: false
            });
        })
    };

    render() {
        const {theme} = this.props;

        return (
            <Grid
                container
                direction={"column"}
                alignItems={"center"}
                justify={"center"}
                className={"mailing-form-container"}
                style={{padding: theme.spacing(6)}}>
                <TextField
                    name="subject"
                    label="Тема"
                    margin="normal"
                    fullWidth
                    value={this.state.subject}
                    onChange={this.handleChange}/>
                <TextField
                    name="text"
                    label="Тема"
                    margin="normal"
                    fullWidth
                    multiline
                    rows={8}
                    value={this.state.text}
                    onChange={this.handleChange}/>
                <Grid
                    container
                    alignItems={"center"}
                    justify={"center"}
                    style={{margin: theme.spacing(1)}}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size={"large"}
                        disabled={this.state.loading}
                        onClick={this.sendEmails}
                        style={{
                            marginTop: theme.spacing(2),
                            width: "100px"
                        }}>
                        Надіслати
                        {this.state.loading &&
                        <CircularProgress
                            size={32}
                            color={"secondary"}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: -theme.spacing(2),
                                marginLeft: -theme.spacing(2),
                            }}/>}
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default withTheme(MailingFormCard);