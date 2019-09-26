import {connect} from "react-redux";
import ProductCard from "./ProductCard";
import {deleteProduct, updateProduct} from "../../../redux/actions/productsActions/productsActionsDispatcher";
import {
    addToNewUserOrder,
    updateUserOrder
} from "../../../redux/actions/userOrderActions/userOrderActionsDispatcher";

const mapDispatchToProps = (dispatch, ownProps) => {
    const handleDelete = () => dispatch(deleteProduct(ownProps.product.id));
    const addToOrder = (username, order) => {
        dispatch(updateUserOrder(
            username,
            {
                ...order,
                orderedProducts: [
                    ...order.orderedProducts,
                    {
                        amount: 1,
                        product: {
                            id: ownProps.product.id
                        },
                    }
                ]
            }
        ))
    };
    const setDiscount = discount => {
        dispatch(updateProduct(
            {
                ...ownProps.product,
                discount: discount
            }
        ))
    };
    const addToNewOrder = username => {
        dispatch(addToNewUserOrder(username, ownProps.product));
    };

    return {
        handleDelete,
        addToOrder,
        addToNewOrder,
        setDiscount
    }
};

const mapStateToProps = (state, ownProps) => {
    const foundUserOrder = state.userOrderData.userOrder.find(userOrder => userOrder.status === "inProgress");

    return {
        isOrderInProgress: !!foundUserOrder,
        orderInProgress: foundUserOrder,
        isUserLogged: state.userData.isLogged,
        isProductInOrder: foundUserOrder
            && foundUserOrder.orderedProducts
            && foundUserOrder.orderedProducts
                .some(orderedProduct => orderedProduct.product.id === ownProps.product.id),
        username: state.userData.username,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);