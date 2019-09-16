import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import React from "react";
import useTheme from "@material-ui/core/styles/useTheme";
import Input from "@material-ui/core/Input";

function SimpleSelect(props) {
    const theme = useTheme();
    return (
        <FormControl style={{
            width: props.width
        }}>
            <InputLabel shrink htmlFor="select">
                {props.label}
            </InputLabel>
            <Select
                value={props.selected.id}
                onChange={props.handleChange}
                id="select"
                style={{marginTop: theme.spacing(2),}}
                input={<Input id="select" />}
            >
                {props.placeholder && <MenuItem
                    value={props.placeholder.id}
                    style={{paddingLeft: theme.spacing(1)}}>
                    {props.placeholder.name}
                </MenuItem>}
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

SimpleSelect.defaultProps = {
    width: "200px"
};
export default SimpleSelect;