import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";
import UserOrderHistoryPage from "../UserOrderHistoryPage/UserOrderHistoryPage";

class UserPage extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={"/user/order-history"} component={UserOrderHistoryPage}/>
            </Switch>
        )
    }
}

export default withRouter(UserPage);