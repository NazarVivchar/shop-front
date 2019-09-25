import {connect} from "react-redux";
import {getUserOrder} from "../../../redux/actions/userOrderActions/userOrderActionsDispatcher";
import ShoppingCartDialog from "./ShoppingCartDialog";

const mapDispatchToProps = dispatch => {
    const loadData = username => {
        dispatch(getUserOrder(username));
    };

    return {loadData}
};

const mapStateToProps = state => {
    return {
        userOrder: state.userOrderData.userOrder,
        isUserLogged: state.userData.isLogged,
        username: state.userData.username,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartDialog);