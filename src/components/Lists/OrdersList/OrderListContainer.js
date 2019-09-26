import {connect} from "react-redux";
import {getUserOrder} from "../../../redux/actions/userOrderActions/userOrderActionsDispatcher";
import OrderList from "./OrderList";
import {checkIfUserLoggedAction} from "../../../redux/actions/userActions/userActions";
import {logOutUser} from "../../../redux/actions/userActions/userActionsDispatcher";

const mapDispatchToProps = dispatch => {
    return {
        checkIfUserIsLogged: () => dispatch(checkIfUserLoggedAction()),
        logOutUser: () => dispatch(logOutUser()),
        loadUserOrder: username => dispatch(getUserOrder(username))
    }
};
const mapStateToProps = state => {
    return {
        isUserLogged: state.userData.isLogged,
        username: state.userData.username,
        orders: state.userOrderData.userOrder,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);