import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import withTheme from "@material-ui/core/styles/withTheme";
import ArrowBackIcon from "@material-ui/icons/ChevronLeft"
import ArrowForwardIcon from "@material-ui/icons/ChevronRight"


function Paginator(props)
{

    const {numberOfElements, step, theme, selectedPage} = props;
        const controls = [];
        let index = 1;
        for (let i = 0; i < numberOfElements; i += step) {
            controls.push(
                <Button
                    key={index}
                    onClick={props.handlePageChange(index)}
                    variant="text"
                    style={index === selectedPage
                        ? {color: "#00bdd7", boxShadow: "0 0 5px rgba(0,0,0,0.2)"}
                        : {}}>
                    {index}
                </Button>
            );
            ++index;
        }
        return (

            <Grid
                container
                alignItems="center"
                justify="center"
                style={{marginTop: theme.spacing(4)}}>
                <ButtonGroup>
                    <Button variant="text" onClick={props.handlePageChange(selectedPage - 1)}>
                        <ArrowBackIcon/>
                    </Button>
                    {controls}
                    <Button variant="text" onClick={props.handlePageChange(selectedPage + 1)}>
                        <ArrowForwardIcon/>
                    </Button>
                </ButtonGroup>
            </Grid>
        )
}

export default withTheme(Paginator);