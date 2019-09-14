import {getProducts} from "../../redux/actions/productsActions/productsActionsDispatcher";
import {connect} from "react-redux";
import ProductList from "./ProductList";
import {selectProductByCategory} from "../../selectors/productSelectors";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getProducts());
    };

    return {loadData}
};

const mapStateToProps = (state, ownProps) => {
    return {
        products: selectProductByCategory(state, ownProps.selectedCategoryId),
    }};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);