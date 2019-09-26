import React, {Component} from "react";
import Grid from "@material-ui/core/Grid/index";
import Typography from "@material-ui/core/Typography/index";
import withTheme from "@material-ui/core/styles/withTheme";
import round from "lodash.round";

class HistoryOrderedProductCard extends Component {
    render() {
        const {theme, product} = this.props;

        return (
            <Grid
                alignItems="center"
                justify="space-between"
                container
                style={{
                    marginBottom: theme.spacing(2),
                    marginTop: theme.spacing(2)}}>
                <Grid item xs={10}>
                    <Typography
                        gutterBottom
                        align="left"
                        style={{color: theme.palette.secondary.dark}}>
                        {product.name}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        gutterBottom
                        align="right">
                        {`$  ${round(product.price*(1-product.discount/100), 2)}`}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withTheme(HistoryOrderedProductCard);