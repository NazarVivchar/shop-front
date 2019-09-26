import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import withTheme from '@material-ui/core/styles/withTheme';
import Header from './components/header/HeaderContainer';
import NavigationDrawer from './components/NavigationDrawer/NavigationDrawerContainer';

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
            <div style={{
                background: theme.palette.background.light,
                minHeight: "100vh"
            }}>
                <NavigationDrawer
                    isDrawerOpened={this.state.isDrawerOpened}
                    handleDrawerClose={this.handleDrawerClose}/>
                <Header
                    handleDrawerOpen={this.handleDrawerOpen}/>
                <div onClick={this.handleOutsideDrawerClick}>
                    <Paper
                        style={{
                            margin: `0 ${theme.spacing(2)}px`,
                            minHeight: "700px",
                            padding: theme.spacing(2)
                        }}>
                        {this.props.children}
                    </Paper>
                </div>
            </div>
        );
    }
}

export default withTheme(Layout);
