import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import * as PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    padding: `0 ${theme.spacing(1)}px`,
    ...theme.mixins.toolbar,
  },
}));

function NavigationDrawer(props) {
  const theme = useTheme();

  return (
    <Drawer
      anchor="left"
      width="240px"
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
      <Divider />
      <div style={{ width: '240px' }}>
        <List>
          {[1, 2, 3, 4, 5].map(i => (
            <ListItem
              button
              key={i}
              style={{
                padding:
                    `${theme.spacing(2)}px 
                    ${theme.spacing(4)}px`,
              }}>
              <ListItemText primary={`Link ${i}`} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

NavigationDrawer.propTypes = {
  isDrawerOpened: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default NavigationDrawer;
