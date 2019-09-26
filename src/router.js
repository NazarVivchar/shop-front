import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPageContainer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import withAuthorization from "./AuthorizationHOC";
import UserPage from "./pages/UserPage/UserPage";

const Routes = () => {
    return (
        <Switch>
            <Route path="/dashboard" render={() => withAuthorization(DashboardPage, ['ROLE_ADMIN'])} />
            <Route path="/user" render={() => withAuthorization(UserPage, ['ROLE_USER', 'ROLE_ADMIN'])} />
            <Route path="/main-page" component={MainPage}/>
            <Redirect exact from="/" to="/main-page"/>
            <Route component={NotFoundPage}/>
        </Switch>
    )
}

export default Routes;