import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createPalette from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({
    palette: createPalette({

        primary: {
            main: '#101d23',
        },
        secondary: {
            main: '#00bdd7',
        },
        background: {
            light: 'rgba(21,48,56,0.16)',
        },
        contrastThreshold: 5,
        tonalOffset: 0.2,
    }),
    spacing: 8,
});

export default theme;
