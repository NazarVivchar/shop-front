import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import DashboardProductPage from "../DashboardProductPage/DashboardProductPageContainer";
import {withRouter} from "react-router";
import DashboardCategoryPage from "../DashboardCategoryPage/DashboardCategoryPage";
import MailingPage from "../MailingPage/MailingPage";

class DashboardPage extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={"/dashboard/products"} component={DashboardProductPage}/>
                <Route exact path={"/dashboard/categories"} component={DashboardCategoryPage}/>
                <Route path="/dashboard/mailing" component={MailingPage}/>
            </Switch>
        )
    }
}

export default withRouter(DashboardPage);