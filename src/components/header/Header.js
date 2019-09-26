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
import ShoppingCartDialog from "../dialogs/ShoppingCartDialog/ShoppingCartDialogContainer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import {Badge} from "@material-ui/core";

class Header extends Component {
    state = {
        isLoginDialogOpened: false,
        isRegisterDialogOpened: false,
        isShoppingCartDialogOpened: false,
        isAppBarSticking: false
    };

    componentDidMount() {
        this.props.checkIfUserIsLogged();
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 150 && !this.state.isAppBarSticking) {
            this.setState({
                isAppBarSticking: true
            })
        } else if (window.scrollY < 150 && this.state.isAppBarSticking) {
            this.setState({
                isAppBarSticking: false
            })
        }
    };

    swapForms = () => {
        this.setState(prevState => ({
            isLoginDialogOpened: !prevState.isLoginDialogOpened,
            isRegisterDialogOpened: !prevState.isRegisterDialogOpened
        }))
    };

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

    handleShoppingCartDialogOpen = () => {
        this.setState({
            isShoppingCartDialogOpened: true
        })
    };

    handleShoppingCartDialogClose = () => {
        this.setState({
            isShoppingCartDialogOpened: false
        })
    };

    getNumberOfOrderedProducts() {
        const {userOrder} = this.props;
        if (userOrder) {
            const foundUserOrder = userOrder.find(userOrder => userOrder.status === "inProgress");
            return foundUserOrder && foundUserOrder.orderedProducts
                ? foundUserOrder.orderedProducts.length
                : 0;
        }
    }

    render() {
        const {theme} = this.props;

        return (
            <>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{
                        height: '150px',
                        background: theme.palette.primary.dark,
                    }}>
                    <Typography
                        variant="h2"
                        color="secondary"
                        align="center">
                        Singularity PC
                    </Typography>

                </Grid>
                <AppBar
                    position="sticky"
                    style={{top: 0}}>
                    <Toolbar>
                        <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            style={{margin: `0 ${theme.spacing(1)}`, height: "70px"}}>
                            <Grid item xs={7}>
                                <Grid
                                    container
                                    alignItems="center"
                                    justify="flex-start">
                                    <IconButton
                                        color="inherit"
                                        onClick={this.props.handleDrawerOpen}
                                        style={{padding: 0}}>
                                        <MenuIcon fontSize="large"/>
                                    </IconButton>
                                    <Typography
                                        variant="h5"
                                        style={{marginLeft: theme.spacing(1)}}>
                                        {this.state.isAppBarSticking && "Singularity"}
                                    </Typography>
                                </Grid>

                            </Grid>
                            <Grid item xs={5}>
                                <Grid container justify="flex-end" alignItems="center">
                                    {this.props.isUserLogged &&

                                    <IconButton
                                        color="inherit"
                                        onClick={this.handleShoppingCartDialogOpen}
                                        style={{
                                            padding: theme.spacing(1),
                                            marginRight: theme.spacing(window.screen.width < 1000 ? 0 : 10)
                                        }}>
                                        <Badge
                                            color="secondary"
                                            badgeContent={this.getNumberOfOrderedProducts()}
                                            style={{margin: theme.spacing(0.5)}}>
                                            <ShoppingCartIcon fontSize="large"/>
                                        </Badge>
                                    </IconButton>
                                    }

                                    {this.props.isUserLogged
                                        ? <IconButton
                                            color="inherit"
                                            onClick={this.props.logOutUser}
                                            style={{
                                                padding: theme.spacing(1),
                                                marginRight: theme.spacing(window.screen.width < 1000 ? 0 : 4)
                                            }}>
                                            <LogOutIcon fontSize="large"/>
                                        </IconButton>
                                        : <IconButton
                                            color="inherit"
                                            onClick={this.handleLoginDialogOpen}
                                            style={{
                                                padding: theme.spacing(1),
                                                marginRight: theme.spacing(window.screen.width < 1000 ? 0 : 4)
                                            }}>
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
                {this.props.isUserLogged &&
                <ShoppingCartDialog
                    isOpened={this.state.isShoppingCartDialogOpened}
                    handleClose={this.handleShoppingCartDialogClose}
                />
                }
            </>
        );
    }
}

Header.propTypes = {
    handleDrawerOpen: PropTypes.func.isRequired,
};

export default withTheme(Header);
