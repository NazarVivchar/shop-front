import React, {Component} from "react";
import MailingFormCard from "../../components/cards/MailingFormCard/MailingFormCard";
import Grid from "@material-ui/core/Grid";
import withTheme from "@material-ui/core/styles/withTheme";
import Typography from "@material-ui/core/Typography";

class MailingPage extends Component {
    render() {
        const {theme} = this.props;

        return (
            <Grid
                container
                alignItems={"center"}
                justify={"center"}>
                <Typography
                    variant={"h4"}
                    color={"secondary"}
                    align={"center"}
                    style={{
                        marginTop: theme.spacing(10),
                        marginBottom: theme.spacing(4)
                    }}>
                    Лист усім користувачам
                </Typography>
                <MailingFormCard/>
            </Grid>
        );
    }
}

export default withTheme(MailingPage);