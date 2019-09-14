import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import React from "react";
import useTheme from "@material-ui/core/styles/useTheme";

function SimpleSelect(props) {
    const theme = useTheme();
    return (
        <FormControl style={{
            margin: theme.spacing(1),
            minWidth: 120,
        }}>
            <InputLabel shrink htmlFor="select">
                {props.label}
            </InputLabel>
            <Select
                value={props.selected.id}
                onChange={props.handleChange}
                id="select"
                displayEmpty
                style={{marginTop: theme.spacing(2),}}
            >
                {props.options.map(option =>
                    <MenuItem
                        key={option.id}
                        value={option.id}
                        style={{paddingLeft: theme.spacing(1)}}>
                        {option.name}
                    </MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default SimpleSelect;