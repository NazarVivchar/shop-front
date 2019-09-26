import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withTheme from "@material-ui/core/styles/withTheme";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

class OrderedProductCard extends Component {

    removeFromOrder = () => {
        this.props.removeFromOrder(this.props.username, this.props.orderInProgress);
    };

    render() {
        const {theme} = this.props;

        return (
            <Grid
                alignItems="center"
                justify="space-between"
                container
                style={{
                    padding: theme.spacing(1),
                    margin: theme.spacing(1),
                }}
                className="category-container">
                <Grid item xs={7}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        align="justify"
                        style={{
                            color: theme.palette.secondary.dark,
                            marginLeft: theme.spacing(2)
                        }}>
                        {this.props.product.name}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        align="center">
                        {`$  ${this.props.product.price}`}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.removeFromOrder}
                        style={{
                            marginRight: theme.spacing(1)
                        }}>
                        <DeleteForeverIcon style={{color: "red"}}/>
                    </Button>
                </Grid>
            </Grid>

        )
    }
}

export default withTheme(OrderedProductCard);