import {getProducts} from "../../redux/actions/productsActions/productsActionsDispatcher";
import MainPage from "./MainPage";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    const loadData = () => {
        dispatch(getProducts());
    };

    return {loadData}
};

const mapStateToProps = state => ({
    products: state.productsData.products

});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);