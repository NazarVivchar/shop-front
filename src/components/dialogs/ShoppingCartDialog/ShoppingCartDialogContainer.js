import {connect} from "react-redux";
import {
    deleteUserOrder,
    getUserOrder,
    updateUserOrder
} from "../../../redux/actions/userOrderActions/userOrderActionsDispatcher";
import ShoppingCartDialog from "./ShoppingCartDialog";

const mapDispatchToProps = dispatch => {
    const loadData = username => {
        dispatch(getUserOrder(username));
    };

    const placeOrder = (username, order) => {
        dispatch(updateUserOrder(username, {
            ...order,
            status: "inProcessing"
        }))
    };

    const cancelOrder = (username, order) => {
        dispatch(deleteUserOrder(username, order))
    };

    return {
        loadData,
        placeOrder,
        cancelOrder
    }
};

const mapStateToProps = state => {
    return {
        userOrder: state.userOrderData.userOrder,
        isUserLogged: state.userData.isLogged,
        username: state.userData.username,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartDialog);