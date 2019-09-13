import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import withTheme from '@material-ui/core/styles/withTheme';
import Header from './components/header/Header';
import ResponsiveDrawer from './components/ResponsiveDrawer/ResponsiveDrawer';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpened: false,
        };
    }

    handleDrawerOpen = () => {
        this.setState({isDrawerOpened: true});
    };

    handleDrawerClose = () => {
        this.setState({isDrawerOpened: false});
    };

    handleOutsideDrawerClick = () => {
        if (this.state.isDrawerOpened) {
            this.handleDrawerClose();
        }
    };

    render() {
        const {theme} = this.props;
        return (
            <div style={{background: theme.palette.background.light}}>
                <ResponsiveDrawer
                    isDrawerOpened={this.state.isDrawerOpened}
                    handleDrawerClose={this.handleDrawerClose}/>
                <Header handleDrawerOpen={this.handleDrawerOpen}/>
                <Container
                    maxWidth="xl"
                    style={{marginTop: theme.spacing(4)}}
                    onClick={this.handleOutsideDrawerClick}>
                    <Paper
                        style={{padding: theme.spacing(4)}}>
                        {this.props.children}
                        <div style={{height: '1000px'}}/>
                    </Paper>
                </Container>
            </div>
        );
    }
}

export default withTheme(Layout);
