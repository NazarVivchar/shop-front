import Fab from "@material-ui/core/Fab";
import React from "react";
import useTheme from "@material-ui/core/styles/useTheme";

function CustomFab(props) {
    const theme = useTheme();
    return (
        <Fab
            color="secondary"
            style={{
                position: "fixed",
                color: "white",
                bottom: theme.spacing(2),
                right: theme.spacing(2)
            }}
            onClick={props.onClick}>
            {props.children}
        </Fab>
    )
}

export default CustomFab;