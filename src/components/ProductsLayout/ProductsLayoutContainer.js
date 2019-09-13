import {getProducts} from "../../redux/actions/productsActions/productsActionsDispatcher";
import {connect} from "react-redux";
import ProductsLayout from "./ProductsLayout";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getProducts());
    };

    return {loadData}
};

const mapStateToProps = state => ({
    products: state.productsData.products

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsLayout);