import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withTheme from "@material-ui/core/styles/withTheme";
import "./CommentCard.scss";
import {Rating} from '@material-ui/lab';

class CommentCard extends Component {
    render() {
        const {comment, theme} = this.props;
        return (
            <Grid
                container
                direction={"column"}
                style={{
                    margin: theme.spacing(2),
                    padding: theme.spacing(2),
                    width: "100%"
                }}
                className="comment-container">
                <Grid
                    container>
                    <Typography
                        variant={"h5"}
                        color={"secondary"}
                        style={{
                            padding: theme.spacing(1),
                        }}>
                        {comment.name}
                    </Typography>
                    <Typography
                        variant={"h5"}
                        color={"secondary"}
                        style={{
                            padding: theme.spacing(1),
                        }}>
                        {comment.surname}
                    </Typography>
                </Grid>
                <Rating
                    readOnly
                    precision={0.5}
                    value={comment.rating}
                    style={{
                        padding: theme.spacing(2),
                    }}/>
                <Grid>
                    <Typography
                        variant={"h5"}
                        style={{
                            padding: theme.spacing(2),
                        }}>
                        {comment.commentText}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withTheme(CommentCard);