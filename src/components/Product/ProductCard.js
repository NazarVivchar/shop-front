import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useTheme from "@material-ui/core/styles/useTheme";
import withTheme from "@material-ui/core/styles/withTheme";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import "./ProductCard.scss"

class ProductCard extends Component {
    render() {
        const {product, theme} = this.props;
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="space-between"
                style={{
                    padding: theme.spacing(2),
                    margin: theme.spacing(0.5),
                }}
                className="product-container">
                <Grid item style={{height: "40%"}}>
                    <img
                        src={`data:image/gif;base64,${product.image}`}
                        alt={`Image of ${product.name} was supposed to be here :(`}
                        align="middle"
                        style={{height: "100%", width: "auto"}}/>
                </Grid>
                <Grid item>
                    <Typography
                        gutterBottom
                        variant="h6"
                        align="center"
                        style={{
                            color: theme.palette.secondary.dark,
                            height: "25%"
                        }}>
                        {product.name}
                    </Typography>
                </Grid>
                <Grid
                    item
                    style={{
                        height: "25%",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }}>
                    <Typography
                        gutterBottom
                        align="center"
                        style={{
                            fontSize: "12px",
                            color: theme.palette.primary.light,
                        }}>
                        {product.description}
                    </Typography>
                </Grid>
                <Grid
                    container
                    justify="space-between"
                    style={{
                        height: "10%"
                    }}>
                    <Grid item>
                        <Typography
                            variant="h6"
                            style={{fontWeight: 600}}>
                            {`$  ${product.price}`}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary" size="small">
                            <AddShoppingCartIcon style={{color: theme.palette.secondary.dark}}/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withTheme(ProductCard);