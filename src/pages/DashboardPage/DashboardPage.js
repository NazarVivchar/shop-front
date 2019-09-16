import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import DashboardProductPage from "../DashboardProductPage/DashboardProductPageContainer";
import {withRouter} from "react-router";
import DashboardCategoryPage from "../DashboardCategoryPage/DashboardCategoryPage";

class DashboardPage extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path={"/dashboard/products"} component={DashboardProductPage}/>
                    <Route exact path={"/dashboard/categories"} component={DashboardCategoryPage}/>
                </Switch>
        )
    }
}

export default withRouter(DashboardPage);