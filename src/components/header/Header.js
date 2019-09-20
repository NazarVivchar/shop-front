import AppBar from '@material-ui/core/AppBar';
import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import LogOutIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withTheme from "@material-ui/core/styles/withTheme";
import LoginUserDialog from "../dialogs/UserDialog/LoginUserDialog";
import RegisterUserDialog from "../dialogs/UserDialog/RegisterUserDialog";

class Header extends Component {
    state = {
        isLoginDialogOpened: false,
        isRegisterDialogOpened: false
    };
    swapForms = () => {
        this.setState(prevState => ({
            isLoginDialogOpened: !prevState.isLoginDialogOpened,
            isRegisterDialogOpened: !prevState.isRegisterDialogOpened
        }))
    };

    componentDidMount() {
        this.props.checkIfUserIsLogged();
    }

    handleLoginDialogOpen = () => {
        this.setState({
            isLoginDialogOpened: true
        })
    };

    handleLoginDialogClose = () => {
        this.setState({
            isLoginDialogOpened: false
        })
    };

    handleRegisterDialogClose = () => {
        this.setState({
            isRegisterDialogOpened: false
        })
    };

    render() {
        const {theme} = this.props;
        return (
            <>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{
                        height: '100px',
                        background: theme.palette.primary.dark,
                    }}>
                    <Typography
                        variant="h2"
                        color="secondary"
                        align="center">
                        Placeholder
                    </Typography>

                </Grid>
                <AppBar position="sticky" style={{top: 0}}>
                    <Toolbar>
                        <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            style={{margin: `0 ${theme.spacing(2)}`}}>
                            <Grid item xs={11}>
                                <Grid
                                    container
                                    alignItems="center"
                                    justify="flex-start">
                                    <IconButton
                                        color="inherit"
                                        onClick={this.props.handleDrawerOpen}>
                                        <MenuIcon fontSize="large"/>
                                    </IconButton>
                                    <Typography
                                        variant="h5">
                                        Singularity
                                    </Typography>
                                </Grid>

                            </Grid>
                            <Grid item xs={1}>
                                <Grid
                                    container
                                    alignItems="center"
                                    justify="center">
                                    {this.props.isUserLogged
                                        ? <IconButton
                                            color="inherit"
                                            onClick={this.props.logOutUser}>
                                            <LogOutIcon fontSize="large"/>
                                        </IconButton>
                                        : <IconButton
                                            color="inherit"
                                            onClick={this.handleLoginDialogOpen}>
                                            <AccountIcon fontSize="large"/>
                                        </IconButton>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <LoginUserDialog
                    isOpened={this.state.isLoginDialogOpened}
                    handleClose={this.handleLoginDialogClose}
                    handleFormSwap={this.swapForms}
                />
                <RegisterUserDialog
                    isOpened={this.state.isRegisterDialogOpened}
                    handleClose={this.handleRegisterDialogClose}
                    handleFormSwap={this.swapForms}
                />
            </>
        );
    }
}

Header.propTypes = {
    handleDrawerOpen: PropTypes.func.isRequired,
};

export default withTheme(Header);
