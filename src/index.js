import ReactDOM from 'react-dom';
import './index.scss';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {Provider} from 'react-redux'
import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import store from "./redux/store/store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render((
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    ),
    document.getElementById('root'));

serviceWorker.register();
