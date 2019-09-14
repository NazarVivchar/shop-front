import {getProducts} from "../../redux/actions/productsActions/productsActionsDispatcher";
import {connect} from "react-redux";
import ProductList from "./ProductList";
import {orderProductsByName, orderProductsByPrice, selectProductsByCategory} from "../../selectors/productSelectors";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getProducts());
    };

    return {loadData}
};

const mapStateToProps = (state, ownProps) => {
    const products = selectProductsByCategory(state, ownProps.selectedCategoryId);

    if (ownProps.sortingField === 'price') {
        return {
            products: orderProductsByPrice(products, ownProps.sortingOrder)
        }
    } else {
        return {
            products: orderProductsByName(products, 1)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);