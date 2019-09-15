import {connect} from "react-redux";
import ProductDialog from "./ProductDialog";
import {getProducts, saveProduct} from "../../../redux/actions/productsActions/productsActionsDispatcher";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getProducts());
    };
    const handleSubmit = product => dispatch(saveProduct(product));

    return {
        loadData,
        handleSubmit
    }
};

const mapStateToProps = state => {
    return {
        categories: state.categoriesData.categories
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDialog);