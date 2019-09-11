import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';

function Header(props) {
  const theme = useTheme();
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
      <AppBar position="sticky" style={{ top: 0 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={props.handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5">
              Singularity
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

Header.propTypes = {
  handleDrawerOpen: PropTypes.func.isRequired,
};

export default Header;
