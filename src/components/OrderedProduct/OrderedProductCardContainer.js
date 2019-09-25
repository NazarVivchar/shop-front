import {connect} from "react-redux";
import {deleteUserOrder, updateUserOrder} from "../../redux/actions/userOrderActions/userOrderActionsDispatcher";
import OrderedProductCard from "./OrderedProductCard";

const mapDispatchToProps = (dispatch, ownProps) => {
    const removeFromOrder = (username, order) => {
        const newOrderedProducts = order.orderedProducts.filter(orderedProduct => orderedProduct.product.id !== ownProps.product.id);

        if (newOrderedProducts.length) {
            dispatch(updateUserOrder(
                username,
                {
                    ...order,
                    orderedProducts: order.orderedProducts.filter(orderedProduct => orderedProduct.product.id !== ownProps.product.id),
                }
            ))
        } else {
            dispatch(deleteUserOrder(username, order))
        }
    };

    return {
        removeFromOrder
    }
};

const mapStateToProps = (state, ownProps) => {
    const foundUserOrder = state.userOrderData.userOrder.find(userOrder => userOrder.status === "inProgress");

    return {
        orderInProgress: foundUserOrder,
        username: state.userData.username,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderedProductCard);