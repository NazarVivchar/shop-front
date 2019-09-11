import ReactDOM from 'react-dom';
import './index.css';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {Provider} from 'react-redux'
import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import store from "./redux/store/store";

ReactDOM.render((
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    ),
    document.getElementById('root'));

serviceWorker.register();
