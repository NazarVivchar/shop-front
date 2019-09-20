import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import withTheme from '@material-ui/core/styles/withTheme';
import Header from './components/header/HeaderContainer';
import NavigationDrawer from './components/ResponsiveDrawer/NavigationDrawer';

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
                <NavigationDrawer
                    isDrawerOpened={this.state.isDrawerOpened}
                    handleDrawerClose={this.handleDrawerClose}/>
                <Header handleDrawerOpen={this.handleDrawerOpen}/>
                <div
                    style={{marginTop: theme.spacing(4)}}
                    onClick={this.handleOutsideDrawerClick}>
                    <Paper
                        style={{padding: theme.spacing(2)}}>
                        {this.props.children}
                        <div style={{height: '1000px'}}/>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default withTheme(Layout);
