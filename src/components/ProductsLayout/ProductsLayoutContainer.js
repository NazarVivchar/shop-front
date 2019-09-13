import {getProducts} from "../../redux/actions/productsActions/productsActionsDispatcher";
import {connect} from "react-redux";
import ProductsLayout from "./ProductsLayout";
import {getCategories} from "../../redux/actions/categoriesActions/categoriesActionsDispatcher";
import {selectProductByCategory} from "../../selectors/productSelectors";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getProducts());
        dispatch(getCategories());
    };

    return {loadData}
};

const mapStateToProps = state => {
    return {
    products: state.productsData.products,
    categories: state.categoriesData.categories,

}};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsLayout);