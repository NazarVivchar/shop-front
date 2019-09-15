import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
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
        return (
                <Switch>
                    <Route exact path={"/dashboard/products"} render={this.renderProducts}/>
                </Switch>
        )
    }
}

export default withRouter(DashboardPage);