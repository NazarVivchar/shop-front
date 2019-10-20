import React, {Component} from "react";
import CommentCard from "../../cards/CommentCard/CommentCard";
import Grid from "@material-ui/core/Grid";

class CommentsList extends Component {
    render() {
        return (
            <Grid
                container
                direction={"column"}
                alignItems={"center"}
                justify={"center"}
                >
                {this.props.comments.map(comment=><CommentCard key={comment.id} comment={comment}/>)}
            </Grid>
        )
    }

}

export default CommentsList;