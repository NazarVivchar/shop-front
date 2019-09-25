import {connect} from "react-redux";
import ProductCard from "./ProductCard";
import {deleteProduct} from "../../redux/actions/productsActions/productsActionsDispatcher";
import {updateUserOrder} from "../../redux/actions/userOrderActions/userOrderActionsDispatcher";

const mapDispatchToProps = (dispatch, ownProps) => {
    const handleDelete = () => dispatch(deleteProduct(ownProps.product.id));
    const addToOrder = order => {
        dispatch(updateUserOrder(
            ownProps.username,
            {
                ...ownProps.orderInProgress,
                orderedProducts: [
                    ...ownProps.orderInProgress.orderedProducts,
                    {
                        amount: 1,
                        product: ownProps.product,
                    }
                ]
            }
        ))
    };

    return {
        handleDelete,
        addToOrder
    }
};

const mapStateToProps = (state, ownProps) => {
    console.log(state.userOrderData.userOrder);
    return  {
        order: state.userOrderData.userOrder,
        username: state.userData.username,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);