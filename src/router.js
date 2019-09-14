import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPageContainer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import DashboardProductPage from "./pages/DashboardProductPage/DashboardProductPage";

const Routes = () => {
    return (
        <Switch>
            <Route path="/dashboard" component={DashboardPage} />
                <Route exact path={"/dashboard/p"} component={DashboardProductPage}/>
            <Route path="/main-page" component={MainPage}/>
            <Redirect exact from="/" to="/main-page"/>
            <Route component={NotFoundPage}/>
        </Switch>
    )
}

export default Routes;