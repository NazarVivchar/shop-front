import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import DashboardProductPage from "../DashboardProductPage/DashboardProductPageContainer";
import {withRouter} from "react-router";

class DashboardPage extends Component {
    constructor(props) {
        super(props);
    }

    renderProducts() {
        return (
            <DashboardProductPage/>
        )
    }

    render() {
        console.log("dashboard");
        return (
                <Switch>
                    <Route exact path={"/dashboard/products"} render={this.renderProducts}/>
                </Switch>
        )
    }
}

export default withRouter(DashboardPage);