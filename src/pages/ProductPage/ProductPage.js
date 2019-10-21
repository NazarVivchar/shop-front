import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import withTheme from "@material-ui/core/styles/withTheme";
import round from "lodash.round";
import Typography from "@material-ui/core/Typography";
import CommentsList from "../../components/Lists/CommentsList/CommentsList";
import CommentFormCard from "../../components/cards/CommentFormCard/CommentFormCardContainer";

class ProductPage extends Component {
    componentDidMount() {
        this.props.loadData();
    }

    saveComment(name, surname, commentText) {

    }

    renderDiscountMessage() {
        const {theme, product} = this.props;

        return (
            <Grid container
                  justify="space-evenly"
                  alignItems="center"
                  style={{
                      height: "15%",
                      paddingBottom: theme.spacing(3)
                  }}>
                <Typography
                    align="center"
                    variant="h5">
                    Акція! Знижка
                </Typography>
                <Typography
                    align="center"
                    variant="h5"
                    style={{color: "red"}}>
                    <b>{product.discount + (product.category.discount ? product.category.discount.percentage : 0)}%</b>
                </Typography>
            </Grid>
        )
    }

    render() {
        const {product, theme} = this.props;

        return (
            <>
                {product &&
                <Grid
                    container
                    alignItems={"stretch"}
                    direction={"column"}>
                    <Grid
                        container
                        alignItems={"center"}
                        justify={"center"}>
                        <Grid
                            xs={6}
                            item>
                            <Grid
                                container
                                alignItems={"center"}
                                justify={"center"}>
                                <img
                                    src={`data:image/gif;base64,${product.image}`}
                                    alt={`${product.name} was supposed to be here :(`}
                                    align="middle"
                                    style={{height: "400px", width: "auto", maxWidth: "100%"}}/>
                                {!!(product.discount || product.category.discount) && this.renderDiscountMessage()}
                            </Grid>
                        </Grid>
                        <Grid
                            xs={6}
                            item>
                            <Grid
                                container
                                style={{height: "400px"}}
                                alignItems={"center"}
                                justify={"space-evenly"}>
                                <Grid
                                    container
                                    direction={"row"}
                                    justify={"space-between"}>
                                    <Typography
                                        variant={"h5"}
                                        color={"secondary"}>
                                        Назва
                                    </Typography>
                                    <Typography
                                        variant={"h5"}>
                                        {product.name}
                                    </Typography>
                                </Grid>
                                <Grid container direction={"row"} justify={"space-between"}>
                                    <Typography
                                        variant={"h5"}
                                        color={"secondary"}>
                                        Категорія
                                    </Typography>
                                    <Typography
                                        variant={"h5"}>
                                        {product.category.name}
                                    </Typography>
                                </Grid>
                                <Grid container direction={"row"} justify={"space-between"}>
                                    <Typography
                                        variant={"h5"}
                                        color={"secondary"}>
                                        Опис
                                    </Typography>
                                    <Typography
                                        variant={"h5"}>
                                        {product.description}
                                    </Typography>
                                </Grid>
                                <Grid container direction={"row"} justify={"space-between"}>
                                    <Typography
                                        variant={"h5"}
                                        color={"secondary"}>
                                        Ціна
                                    </Typography>
                                    <Typography
                                        variant={"h5"}>
                                        {`$  ${round(product.price * (1 - (product.discount + (product.category.discount ? product.category.discount.percentage : 0)) / 100), 2)}`}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        alignItems={"center"}
                        justify={"center"}
                        direction={"column"}>
                        <Typography
                            variant={"h5"}
                            color={"secondary"}
                            align={"center"}
                            style={{
                                marginTop: theme.spacing(10),
                                marginBottom: theme.spacing(4)
                            }}>
                            Коментарі
                        </Typography>
                        <CommentsList comments={product.comments}/>
                        <Grid
                            container
                            direction={"column"}
                            alignItems={"center"}
                            justify={"center"}
                        >
                            <CommentFormCard saveComment={this.props.saveComment(product)}/>
                        </Grid>
                    </Grid>
                </Grid>
                }
            </>
        )
    }
}

export default withTheme(ProductPage);