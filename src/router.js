import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function Routes() {
    return (
        <Switch>
            <Route path="/main-page" component={MainPage}/>
            <Redirect exact from="/" to="/main-page"/>
            <Route component={NotFoundPage}/>
        </Switch>
    )
}

export default Routes;