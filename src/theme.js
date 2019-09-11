import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createPalette from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({
  palette: createPalette({

    primary: {
      main: '#101d23',
    },
    secondary: {
      main: '#00e5ff',
    },
    background: {
      // main: 'rgba(0,229,255,0.04)',
      light: 'rgba(21,48,56,0.16)',
    },
    contrastThreshold: 5,
    tonalOffset: 0.3,
  }),
  spacing: 8,

});

export default theme;
