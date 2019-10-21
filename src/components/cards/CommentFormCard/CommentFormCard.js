import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import "./CommentFormCard.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Rating} from '@material-ui/lab';

class CommentFormCard extends Component {

    state = {
        name: this.props.name,
        surname: this.props.surname,
        commentText: "",
        rating: null,
    };

    saveComment = () => {
        const {name, surname, commentText} = this.state;
        const comment = {
            name: this.state.name,
            surname: this.state.surname,
            commentText: this.state.commentText,
            rating: this.state.rating
        };

        if (name && surname && commentText
            && name.length && surname.length && commentText.length) {
            this.props.saveComment(comment)
        }
    };

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.getAttribute("name")]: event.target.value,
        });
    };

    handleRatingChange = (event, value) => {
        this.setState({
            rating: value
        })
    };

    render() {
        const {theme} = this.props;
        return (
            <Grid
                container
                direction={"column"}
                style={{
                    margin: theme.spacing(2),
                    padding: theme.spacing(4),
                    width: "100%"
                }}
                className="comment-form-container">
                <Typography
                    variant={"h4"}
                    color={"secondary"}
                    align={"center"}
                    style={{
                        margin: theme.spacing(2),
                    }}>
                    Новий коментар
                </Typography>
                <Grid
                    container>
                    <TextField
                        name="name"
                        label="Ім'я"
                        margin="normal"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                    <TextField
                        name="surname"
                        label="Прізвище"
                        margin="normal"
                        value={this.state.surname}
                        onChange={this.handleChange}
                        style={{marginLeft: theme.spacing(8)}}/>
                </Grid>
                <Rating
                    name="rating"
                    precision={0.5}
                    value={this.state.rating}
                    onChange={this.handleRatingChange}
                    style={{marginTop: theme.spacing(3)}}
                />
                <TextField
                    name="commentText"
                    label="Коментар"
                    margin="normal"
                    fullWidth
                    multiline
                    rows="4"
                    value={this.state.commentText}
                    onChange={this.handleChange}/>
                <Grid
                    container
                    alignItems={"center"}
                    justify={"center"}
                    style={{margin: theme.spacing(1)}}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={this.saveComment}
                        style={{
                            marginTop: theme.spacing(2),
                            width: "100px"
                        }}>
                        Зберегти
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default withTheme(CommentFormCard);