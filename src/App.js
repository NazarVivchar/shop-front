import React from 'react';
import './App.scss';
import Layout from './Layout';
import Routes from "./router";
import {createBrowserHistory} from 'history';
import {Router} from "react-router-dom";

function App() {
    return (
        <Router history={history}>
            <Layout>
                <Routes/>
            </Layout>
        </Router>
    );

}
export const history = createBrowserHistory();

export default App;
