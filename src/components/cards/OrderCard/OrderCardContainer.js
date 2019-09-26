import {connect} from "react-redux";
import {updateUserOrder} from "../../../redux/actions/userOrderActions/userOrderActionsDispatcher";
import OrderCard from "./OrderCard";

const mapDispatchToProps = (dispatch, ownProps) => {
    const cancelUserOrder = username => {
        dispatch(updateUserOrder(
            username,
            {
                ...ownProps.order,
                status: "cancelled"
            }
        ));
    };

    return {
        cancelUserOrder
    }
};

const mapStateToProps = state => {
    return {
        username: state.userData.username,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderCard);
