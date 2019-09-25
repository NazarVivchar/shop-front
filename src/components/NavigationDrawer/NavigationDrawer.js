import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import * as PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import ProductsIcon from '@material-ui/icons/viewModule';
import CategoriesIcon from '@material-ui/icons/viewList';
import Divider from '@material-ui/core/Divider';
import {makeStyles, useTheme} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import useReactRouter from 'use-react-router';
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    drawerHeader: {
        padding: `0 ${theme.spacing(1)}px`,
        ...theme.mixins.toolbar,
    },
}));


function NavigationDrawer(props) {


    const {location} = useReactRouter();
    const theme = useTheme();

    function generateIconColor(url) {
        return (location.pathname === url) ? "secondary" : "primary"
    }

    function hasAdminRole() {
        if (localStorage.getItem('Token')) {
            const token = localStorage.getItem('Token');
            const decodedToken = JSON.parse(window.atob(token.split('.')[1]));
            return decodedToken.authorities.split(' ').includes('ROLE_ADMIN');
        }
        return false;
    }

    function renderCommonLinks() {
        return (
            <>
                {renderLink('/main-page', 'Головна', <HomeIcon color={generateIconColor('/main-page')}
                                                               fontSize="inherit"/>)}
                <Divider/>
            </>
        )
    }

    function renderLink(url, text, icon) {
        return (
            <NavLink
                to={url}
                style={{
                    textDecoration: "none",
                    height: "50px",
                    marginTop: theme.spacing(2),
                    paddingTop: theme.spacing(1),
                    color: theme.palette.primary.light
                }}
                activeStyle={{
                    background: "rgba(0,189,215,0.1)",
                    color: theme.palette.secondary.light
                }}
            >
                <ButtonBase
                    style={{
                        height: "50px",
                        width: "100%",
                    }}
                    onClick={props.handleDrawerClose}>
                    <Grid
                        container
                        className="list-item"
                        alignItems="center"
                        justify="flex-start">

                        <Grid item style={{
                            marginLeft: theme.spacing(2),
                            marginRight: theme.spacing(5)
                        }}>
                            <Typography
                                align="center"
                                variant="h6">
                                {icon}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                gutterBottom
                                align="center"
                                variant="h6">
                                {text}
                            </Typography>
                        </Grid>
                    </Grid>
                </ButtonBase>
            </NavLink>
        )
    }

    function renderAdminLinks() {
        return (
            <>
                {renderLink('/dashboard/products', 'Товари',
                    <ProductsIcon
                        color={generateIconColor('/dashboard/products')}
                        fontSize="inherit"/>)}
                {renderLink('/dashboard/categories', 'Категорії',
                    <CategoriesIcon
                        color={generateIconColor('/dashboard/categories')}
                        fontSize="inherit"/>)}
                <Divider/>
            </>
        )
    }

    return (
        <Drawer
            anchor="left"
            open={props.isDrawerOpened}
            onClose={props.handleDrawerClose}>
            <Grid
                container
                className={useStyles().drawerHeader}
                alignItems="center"
                justify="flex-end">
                <IconButton onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon fontSize="large"/>
                </IconButton>
            </Grid>
            <Divider/>
            <Grid
                container
                direction="column"
                alignItems="stretch"
                style={{width: '260px'}}>
                {renderCommonLinks()}
                {hasAdminRole() && renderAdminLinks()}
            </Grid>
        </Drawer>
    );
}

NavigationDrawer.propTypes = {
    isDrawerOpened: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
};

export default NavigationDrawer;
