import {getProducts, getProductsAmount} from "../../../redux/actions/productsActions/productsActionsDispatcher";
import {connect} from "react-redux";
import ProductList from "./ProductList";
import {orderProductsByName, orderProductsByPrice} from "../../../selectors/productSelectors";
import {changePaginationStart} from "../../../redux/actions/productsActions/productsActions";

const mapDispatchToProps = (dispatch, ownProps) => {
    const loadData = () => {
        dispatch(getProducts(ownProps.selectedCategoryId));
        dispatch(getProductsAmount(ownProps.selectedCategoryId));
    };

    const changePagination = start => dispatch(changePaginationStart(start));

    return {
        loadData,
        changePagination
    }
};

const mapStateToProps = (state, ownProps) => {
    const products = state.productsData.products;


    if (ownProps.sortingField === 'price') {
        return {
            products: orderProductsByPrice(products, ownProps.sortingOrder),
            productsAmount: state.productsData.total
        }
    } else {
        return {
            products: orderProductsByName(products, 1),
            productsAmount: state.productsData.total
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);