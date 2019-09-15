import {connect} from "react-redux";
import ProductCard from "./ProductCard";
import {deleteProduct} from "../../redux/actions/productsActions/productsActionsDispatcher";

const mapDispatchToProps = (dispatch, ownProps) => {
    const handleDelete = () => {
        return dispatch(deleteProduct(ownProps.product.id))};
    return {handleDelete}
};

export default connect(undefined, mapDispatchToProps)(ProductCard);